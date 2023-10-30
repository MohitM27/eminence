const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log("Mongo Error :: ",error)
        process.exit()
    }
}

module.exports = connectDB