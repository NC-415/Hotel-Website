const express = require('express');
const router = express.Router();
const RoomController = require('../controller/roomController');

// Define the POST route for adding a new room
router.post('/add-room', RoomController.createRoom);

// find all room
router.get('/get-rooms', RoomController.getRooms);

module.exports = router;