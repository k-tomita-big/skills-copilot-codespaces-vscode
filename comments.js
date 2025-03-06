// Create web server
// npm install express
const express = require('express');
const app = express();

// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// npm install mongoose
const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Create schema
const commentSchema = new mongoose.Schema({