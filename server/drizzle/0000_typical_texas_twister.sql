CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"status" varchar(12) NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"deadline" timestamp
);
