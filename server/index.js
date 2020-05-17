const express = require("express");
const cors = require("cors");

// routes
const todoRoutes = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("", todoRoutes);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
