import { Hono } from "hono";
import { cors } from "hono/cors";

import { prisma } from "./lib/db";
import { dataProducts } from "../prisma/data/products";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { hashPassword, verifyPassword } from "./lib/password";

import { createToken, validateToken } from "./lib/jwt";
import { checkServerIdentity } from "tls";
import { checkUserToken } from "./middlewares/check-user-token";
import { User } from "@prisma/client";

type Bindings = {
  TOKEN: string;
};

type Variables = {
  user: User;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use("/*", cors());

// | `/products`     | `GET`    | `Get all products`      |
// | `/products/:id` | `GET`    | `Get products by id`    |
// | `/products`     | `POST`   | `add new product`       |
// | `/products`     | `DELETE` | `Delete all products`   |
// | `/products/:id` | `DELETE` | `Delete products by id` |
// | `/products/:id` | `PUT`    | `Update products by id` |

// | `/auth/register`   | `POST`   | Public        |
// | `/auth/login`      | `POST`   | Public        |
// | `/auth/me`         | `GET`    | Authenticated |

app.get("/", (c) => {
  return c.text("Sepatu Compass!");
});

app.get("/users", async (c) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
    },
  });

  return c.json(users);
});

app.get("/users/:username", async (c) => {
  const username = c.req.param("username");

  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      updatedAt: true,
      createdAt: true,
    },
  });

  if (!user) {
    c.status(404);
    c.json({ message: "user not found" });
  }

  return c.json(user);
});

app.post(
  "/auth/register",
  zValidator(
    "json",
    z.object({
      username: z.string(),
      email: z.string(),
      password: z.string(),
    })
  ),
  async (c) => {
    const body = c.req.valid("json");

    try {
      const newUser = await prisma.user.create({
        data: {
          username: body.username,
          email: body.email,
          Password: {
            create: {
              hash: await hashPassword(body.password),
            },
          },
        },
      });
      return c.json({
        message: "Register new user successfull",
        newUser: {
          username: newUser.username,
        },
      });
    } catch (error) {
      c.status(400);
      return c.json({ message: "cannot create user" });
    }
  }
);

app.post(
  "/auth/login",
  zValidator(
    "json",
    z.object({
      username: z.string(),
      password: z.string(),
    })
  ),
  async (c) => {
    const body = c.req.valid("json");

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
      include: {
        Password: true,
      },
    });

    if (!foundUser) {
      c.status(404);
      return c.json({ message: "cannot login because user not found" });
    }

    if (!foundUser?.Password?.hash) {
      c.status(404);
      return c.json({ message: "cannot login because user not found" });
    }

    const validPassword = await verifyPassword(
      foundUser.Password.hash,
      body.password
    );

    if (!validPassword) {
      c.status(400);
      return c.json({ message: "Password, incorrect" });
    }

    //create token
    const token = await createToken(foundUser.id);

    if (!token) {
      c.status(400);
      return c.json({
        message: "Token failed to create",
      });
    }

    return c.json({
      message: "Login Succesfull",
      token,
    });
  }
);

//sampe sini 2jam 3 menit
app.get("/auth/me", checkUserToken(), async (c) => {
  const user = c.get("user");

  return c.json({
    message: "User Data",
    user,
  });
});

app.get("/cart", checkUserToken(), async (c) => {
  const user = c.get("user");

  const existingOrderCart = await prisma.order.findFirst({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!existingOrderCart) {
    const newOrderCart = await prisma.order.create({
      data: {
        userId: user.id,
      },
    });

    return c.json({
      message: "shopping cart",
      user,
      cart: newOrderCart,
    });
  }

  return c.json({
    message: "shopping cart",
    user,
    cart: existingOrderCart,
  });
});

app.get("/products", async (c) => {
  const products = await prisma.product.findMany();
  return c.json(products);
});

app.get("/products/:id", async (c) => {
  const id = String(c.req.param("id"));

  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    c.status(404);
    return c.json({ message: "Products Not Found" });
  }

  return c.json(product);
});

app.post("/products", async (c) => {
  const body = await c.req.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      slug: body.slug,

      imageURL: body.imageURL,
      price: body.price,
      description: body.description,
      sizes: body.sizes,
    },
  });

  return c.json({ product });
});

app.delete("/products", async (c) => {
  const result = await prisma.product.deleteMany();

  return c.json({ messege: "All products have been removed", result });
});

app.post("/products/seed", async (c) => {
  const products = await prisma.product.createMany({
    data: dataProducts,
  });

  return c.json({ products });
});

app.delete("/products/:id", async (c) => {
  const id = String(c.req.param("id"));

  const deletedProduct = await prisma.product.delete({ where: { id } });

  return c.json({
    messege: `Deleted product with id ${id}`,
    deletedProduct,
  });
});

app.put("/products/:id", async (c) => {
  const id = String(c.req.param("id"));
  const body = await c.req.json();

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      imageURL: body.imageURL,
      price: body.price,
      description: body.description,
      sizes: body.sizes,
    },
  });

  return c.json({
    mesage: `updated product with id ${id}`,
    products: updatedProduct,
  });
});

export default app;
