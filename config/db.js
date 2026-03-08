const mongoose = require("mongoose")

const connectDB = async () => {

    try {

        const mood3g = await mongoose.connect(process.env.MONGO_URL)

        console.log(`Connected: Host:${mood3g.connection.host}, ${mood3g.connection.name}`)

    } catch (error) {

        console.error(error.message)
       

    }

}

module.exports = connectDB