// require mongoose
const mongoose = require("mongoose");
//connect to DB
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI,

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }

        )

    } catch (error) {

        console.error(`Cannot connect to DataBase... ${error}`);

    }


    console.log("Database connected ....");
}

module.exports = connectDB;