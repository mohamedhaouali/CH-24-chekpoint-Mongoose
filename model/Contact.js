
//require mongoose
const mongoose = require("mongoose");
//require Schema
const schema = mongoose.Schema;

//create contactSchema

const contactSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number,
});

module.exports = Contact = mongoose.model("contact", contactSchema);