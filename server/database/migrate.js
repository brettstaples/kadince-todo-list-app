import "dotenv/config";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator"

const dbClient = new pg.Client({
    connectionString: process.env.CONNECTION_STRING
});
await dbClient.connect();
const db = drizzle(dbClient);

async function main() {
    console.log("migration started");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("migration ended");
    process.exit(0)
}

main().catch((err) => {
    console.log(err)
    process.exit(0);
});
