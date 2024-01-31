import "dotenv/config";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Todo } from "./models/todos/todos.models.js";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//mongoDB connection
const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("DB connection error:", error));

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A Joke", content: "This is a joke" },
    { id: 2, title: "A Joke 2", content: "This is a joke 2" },
    { id: 3, title: "A Joke 3", content: "This is a joke 3" },
    { id: 4, title: "A Joke 4", content: "This is a joke 4" },
    { id: 5, title: "A Joke 5", content: "This is a joke 5" }
  ];

  res.send(jokes);
});

//todos routes
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(200).json({ newTodo });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/api/todos/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
