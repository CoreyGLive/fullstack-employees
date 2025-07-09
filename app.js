import express from "express";
import employeesRouter from "#api/employees.js";

const app = express();

app.use(express.json()); // handles incoming JSON
app.use("/api/employees", employeesRouter); // connects route logic

export default app;


