const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 25;


const urlToMongoConnection = "mongodb+srv://sirh:MasterSIRH@sorbonne.0ixvr.mongodb.net/?retryWrites=true&w=majority&appName=Sorbonne"
// Connect to MongoDB
mongoose.connect(urlToMongoConnection).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the server
app.listen(port, () => {
  console.log(`Hello on http://localhost:${port}`);
});
