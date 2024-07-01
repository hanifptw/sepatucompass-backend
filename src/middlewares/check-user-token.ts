import { createMiddleware } from "hono/factory";
import { prisma } from "../lib/db";
import { validateToken } from "../lib/jwt";

export const checkUserToken = () => {
  return createMiddleware(async (c, next) => {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) {
      c.status(401);
      return c.json({ message: "Not allowed" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      c.status(401);
      return c.json({ message: "Token is required" });
    }

    const decodedToken = await validateToken(token);
    if (!decodedToken) {
      c.status(401);
      return c.json({ message: "Token is invalid" });
    }

    console.log({ decodedToken });
    const userId = decodedToken.subject;

    if (!userId) {
      c.status(401);
      return c.json({ message: "UserID dosent exist" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
      },
    });
    if (!user) {
      c.status(404);
      return c.json({ message: "User not found" });
    }

    c.set("user", user);

    await next();
  });
};
