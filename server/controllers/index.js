const pool = require("../db");

exports.createTodo = async ({ body: { description } }, res) => {
  try {
    // VALUES($1) is just a placeholder for the description values
    await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [
      description
    ]);
    const { rows } = await pool.query("SELECT * FROM todo");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM todo");
    return res.json(rows);
  } catch (error) {}
};

exports.getATodo = async ({ params: { id } }, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);
    return res.json(rows);
  } catch (error) {}
};

exports.updateATodo = async (
  { params: { id }, body: { description } },
  res
) => {
  try {
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id
    ]);

    const { rows } = await pool.query("SELECT * FROM todo");
    return res.json(rows);
  } catch (error) {}
};

exports.deleteATodo = async ({ params: { id } }, res) => {
  try {
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

    const { rows } = await pool.query("SELECT * FROM todo");
    return res.json(rows);
  } catch (error) {}
};
