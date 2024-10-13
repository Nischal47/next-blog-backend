import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ hello: "world blog" }));

export default app;