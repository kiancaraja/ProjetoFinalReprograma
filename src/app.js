const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const db = require("./config/database");
const AnimaisRoutes = require("./routes/AnimaisRoutes")

db.connect();

app.use(cors());
app.use(express.json());
app.use("/animais", AnimaisRoutes);
module.exports = app;