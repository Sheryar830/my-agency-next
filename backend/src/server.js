const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//load environment variables
dotenv.config();

//create express app
const app = express();

//enable cors
app.use(cors());


//sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

connectDB();
//start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
