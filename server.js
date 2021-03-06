require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.MONGODB_URI); 

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})

module.exports = app