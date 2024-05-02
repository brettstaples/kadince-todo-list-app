import "dotenv/config";
import * as functions from "firebase-functions"
import express from "express";
import path from "path";
import pg from "pg";
import { fileURLToPath } from "url";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { tasks } from "./database/schema.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.DEV_PORT || 3333;
const { Client } = pg;
const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
});
const inProgress = "in progress";
const finished = "finished";

await client.connect();
const db = drizzle(client);

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/api/select/all/tasks", async (req, res) => {
    const result = await db.select()
                                             .from(tasks);
    res.send(result);
});

app.post("/api/create/task", async (req, res) => {
    if (req.body.name !== "") {
        const deadlineDate = (req.body.deadline !== null) ? new Date(req.body.deadline) : req.body.deadline;
        await db.insert(tasks)
                .values({ name: req.body.name,
                                status: "in progress",
                                deadline: deadlineDate,
                                showDeadline: true });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.post("/api/delete/task", async (req, res) => {
    await db.delete(tasks)
            .where(eq(tasks.id, req.body.id));
    res.sendStatus(200);
});

app.post("/api/update/task", async (req, res) => {
    if (req.body.name !== "") {
        const deadlineDate = (req.body.deadline !== null) ? new Date(req.body.deadline) : req.body.deadline;
        const statusBoolean = (req.body.status === inProgress);
        await db.update(tasks)
                .set({ name: req.body.name,
                       deadline: deadlineDate,
                       showDeadline: statusBoolean})
                .where(eq(tasks.id, req.body.id));
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.post("/api/change/task/status", async (req, res) => {
    let statusStr;
    let showDeadlineBoolean;
    if (req.body.status === inProgress) {
        statusStr = finished;
        showDeadlineBoolean = false;
    } else {
        statusStr = inProgress;
        showDeadlineBoolean = true;
    }

    await db.update(tasks)
            .set({ status: statusStr, showDeadline: showDeadlineBoolean })
            .where(eq(tasks.id, req.body.id));
    res.sendStatus(200);
});

app.post("/api/update/deadline", async (req, res) => {
    await db.update(tasks)
            .set({ showDeadline: req.body.showDeadlineBoolean })
            .where(eq(tasks.id, req.body.id));
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

export const api = functions.https.onRequest(app);