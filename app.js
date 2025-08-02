const express = require('express')
const app = express()

// Enable Cross-Origin Resource Sharing for all requests (frontend-backend communication)
const cors = require('cors')
app.use(cors())

// Middleware to parse JSON bodies and URL-encoded data from client requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB database using Mongoose
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/vocabbuilder"
mongoose.connect(db)
   .then(console.log('Connect DB succeed !'))        // Log successful connection
   .catch(err => console.log('Connect db failed ! ' + err))  // Log error if failed

// Import and apply vocabulary API routes
const router = require("./api/routes/VocabRoute")
router(app)

// Start the Express server
const port = 3000
app.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})
