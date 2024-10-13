import { bigserial, text, pgTable, timestamp, bigint } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const blog = pgTable("blogs", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  createdBy: bigint("created_by", { mode: "bigint" }).notNull().references(() => user.id),
});