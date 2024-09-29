
const Room = require('../models/roomModel');


// CRUD Services Functions for roomModel

// Controller to handle POST request to add a new room
const createRoom = async (req, res) => {
    try {
        const {
            roomId,
            title,
            description,
            pricePerNight,
            size,
            numberOfBedrooms,
            numberOfBathrooms,
            availabilityStatus
           // photo
        } = req.body;

        // Create a new room document with the provided data
        const newRoom = new Room({
            roomId,
            title,
            description,
            pricePerNight,
            size,
            numberOfBedrooms,
            numberOfBathrooms,
            availabilityStatus
           // photo
        });

        // Save the room to the database
        await newRoom.save();

        // Send a success response
        res.status(201).json({ message: 'Room created successfully', room: newRoom });
    } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }

}

// Find/retrieve all
const getRooms = (req, res) => {
    Room.find()
        .then(response => res.json({ response }))
        .catch(error => res.json({ error }));
};


module.exports = {
    createRoom,
    getRooms
};