import { pgTable, serial, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    status: varchar("status", { length: 12 }).notNull(),
    timestamp: timestamp("timestamp").notNull().defaultNow(),
    deadline: timestamp("deadline"),
    showDeadline: boolean("showDeadline").notNull(),
});