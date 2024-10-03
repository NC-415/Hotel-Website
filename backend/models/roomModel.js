import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: [true, 'Room ID is required'],
        unique: true, // Ensures roomId is unique
        trim: true,
    },
    roomType: {
        type: String,
        required: [true, 'Room type is required'],
        enum: ['Single', 'Double', 'Suite', 'Deluxe Suite'], // Limited to predefined room types
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    capacity: {
        type: Number,
        required: [true, 'Capacity is required'],
        min: [1, 'Capacity must be at least 1 guest'], // Minimum of 1 guest
    },
    size: {
        type: Number,
        default: 25,
        required: true
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Price per night is required'],
        min: [0, 'Price per night must be a positive number'], // Ensure positive price
    },
    availability: {
        type: Boolean,
        required: true,
        default: true, // Room is available by default
    },
    amenities: {
        type: [String], // Array of amenities (strings)
        required: [true, 'Amenities are required'],
    },
    images: {
        type: [String], // Array of image URLs
        validate: {
            validator: function (urls) {
                return urls.length > 0 && urls.every(url => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url));
            },
            message: 'Each image URL must be valid, and at least one image is required'
        },
        required: [true, 'At least one image URL is required']
    },
    checkInTime: {
        type: String,
        required: [true, 'Check-in time is required'],
        default: "15:00",
        validate: {
            validator: function (v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // Validate HH:MM format
            },
            message: 'Invalid check-in time format. Use HH:MM format'
        }
    },
    checkOutTime: {
        type: String,
        required: [true, 'Check-out time is required'],
        default: "11:00",
        validate: {
            validator: function (v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // Validate HH:MM format
            },
            message: 'Invalid check-out time format. Use HH:MM format'
        }
    },
    cancellationPolicy: {
        type: String,
        default: "Free cancellation up to 24 hours before check-in.",
    }

}, {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

const RoomModel = mongoose.model("Room", roomSchema);

export default RoomModel;
