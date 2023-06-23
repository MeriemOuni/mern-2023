// 1
const mongoose = require("mongoose");

// 2
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: Number,
});

module.exports = Contact = mongoose.model("user", contactSchema);
