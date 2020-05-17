const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "minhkhang",
  host: "localhost",
  database: "perntodo"
});

module.exports = pool;
