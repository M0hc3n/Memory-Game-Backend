const mongoose = require('mongoose')

const connectDB = (connectionUri) =>{
    return mongoose.connect(connectionUri)
}

module.exports = connectDB
