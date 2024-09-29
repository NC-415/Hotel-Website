const express = require('express');
const app = express();
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes'); // Update the path as necessary


app.use(cors());// To allow cross-origin requests from your React frontend

app.use(
    express.urlencoded({
        extended: true, //nested url, array, string will encode
    })
);

app.use(express.json());

// Routes
app.use('/api/rooms', roomRoutes); // Set the base path for room routes

module.exports = app;