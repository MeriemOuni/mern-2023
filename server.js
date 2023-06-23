// 1
const express = require("express");

// 2
const app = express();

// 5
require("dotenv").config();

// 8
app.use(express.json());

// 6
const connectDB = require("./config/connectDB");
connectDB();

// 7 routes
app.use("/api/contact", require("./routs/contact"));

// 3
const PORT = process.env.PORT;

// 4
app.listen(PORT, (err) => {
	err
		? console.error(`Failed to connect to the server !!!${err}`)
		: console.log(`Server running on port ${PORT} ..`);
});
