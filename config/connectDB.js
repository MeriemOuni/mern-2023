// 1
const mongoose = require("mongoose");

// 2 connectDB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log("Database coonected ...");
	} catch (error) {
		console.log("Database is not connected !!", error);
	}
};

// 3
module.exports = connectDB;
