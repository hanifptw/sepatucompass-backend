import { Hono } from "hono";
import { cors } from 'hono/cors'

import { prisma } from "./lib/db";
import { dataProducts } from "../prisma/data/products";

const app = new Hono();

app.use('/*', cors())

// | `/products`     | `GET`    | `Get all products`      |
// | `/products/:id` | `GET`    | `Get products by id`    |
// | `/products`     | `POST`   | `add new product`       |
// | `/products`     | `DELETE` | `Delete all products`   |
// | `/products/:id` | `DELETE` | `Delete products by id` |
// | `/products/:id` | `PUT`    | `Update products by id` |

   

app.get("/", (c) => {
  return c.text("Sepatu Compass!");
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
