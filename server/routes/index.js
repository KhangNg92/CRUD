const express = require("express");
const router = express.Router();

// Controller
const createTodo = require("../controllers/index").createTodo;
const getAllTodos = require("../controllers/index").getAllTodos;
const getATodo = require("../controllers/index").getATodo;
const updateATodo = require("../controllers/index").updateATodo;
const deleteATodo = require("../controllers/index").deleteATodo;

router.post("/todos", createTodo);
router.get("/todos", getAllTodos);
router.get("/todos/:id", getATodo);
router.put("/todos/:id", updateATodo);
router.delete("/todos/:id", deleteATodo);

module.exports = router;
