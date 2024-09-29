const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    // Auto-generated ID by MongoDB
    roomId: { type: Number, unique: true },
    // Optionally(MB autogenarate _id field), if you want a separate auto-increment ID

    // Title, required field
    title: { type: String, required: true },

    // Description, stored as large text
    description: { type: String, default: '', required: false },

    // Price per night, required field
    pricePerNight: { type: Number, required: true },

    // Size in square meters (or whatever unit), optional field
    size: { type: Number },

    // Number of bedrooms and bathrooms, optional fields
    numberOfBedrooms: { type: Number },
    numberOfBathrooms: { type: Number },

    // Availability status, boolean (true/false)
    availabilityStatus: { type: Boolean, default: true },

    // Timestamps for when the apartment was created and last updated
    createdAt: { type: Date, required: true, default: Date.now, immutable: true },
    updatedAt: { type: Date, required: true, default: Date.now },

    // Photo stored as binary (Buffer in MongoDB)
   // photo: { type: Buffer }


});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;