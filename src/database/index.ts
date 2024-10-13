import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  host: Bun.env.DB_HOST,
  port: Number(Bun.env.DB_PORT),
  user: Bun.env.DB_USER,
  password: Bun.env.DB_PASSWORD,
  database: Bun.env.DB_NAME,
  max: Number(Bun.env.DB_MAX_CONNECTIONS) || 20,
  idleTimeoutMillis: Number(Bun.env.DB_IDLE_TIMEOUT) || 30000,
});

export const db = drizzle(pool);

