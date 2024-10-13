import { Hono } from "hono";
import auth from "./modules/auth/route";
import blog from "./modules/blog/route";

const port = Bun.env.PORT || 8000;

const app = new Hono();

app.route("auth", auth);
app.route("blog", blog);

export default {
  port: port,
  fetch: app.fetch,
};
