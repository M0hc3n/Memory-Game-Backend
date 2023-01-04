const express = require("express")
const app = express()

require('dotenv').config({path: './config/.env'})

const PORT = process.env.PORT || 5000

const connectDB = require('./db/connect')

const playersRouter = require('./routes/players')

const cors = require('cors');

app.use(cors());

app.get('/' , (req, res) => {
    res.send("hi mom")
})

app.use('/api/v1/players', playersRouter)


const start = async () => {
    try {
        await connectDB( process.env.MONGO_URI )

        app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))

    } catch (error) {
        console.log("there had been an error.");
        console.log(error);
    }
}

start()

