const mongoose = require('mongoose')

// Define schema for a vocabulary item
const VocabSchema = mongoose.Schema(
   {
      english: {
         type: String,
         required: true,                 // English word is required
         errorMessage: "English word is required"
      },
      vietnam: {
         type: String,
         required: true,                 // Vietnamese meaning is required
         errorMessage: "Vietnam word is required"
      }
   },
   {
      versionKey: false,                 // Don't include __v field in documents
      timestamps: true                   // Add createdAt and updatedAt fields
   }
)

// Create model for the "vocabs" collection using the schema
const Vocab = mongoose.model("vocabs", VocabSchema)

// Export the model to use in controllers/routes
module.exports = Vocab
