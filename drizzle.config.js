import "dotenv/config";

export default {
    schema: "./server/database/schema.js",
    out: "./server/drizzle",
    driver: "pg",
    dbCredentials: {
        host: process.env.HOST_NAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME,
        connectionString: process.env.CONNECTION_STRING,
    },
}