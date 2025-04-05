"use server"
import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter farmer name"],
        unique: true,
    },
    temperature: {
        type: String,
    },
    humidity: {
        type: String,
    },
    moisture: {
        type: String,
    },
    pump: {
        type: String,
    },
    yield: {
        type: JSON,
    },

}, { timestamps: true })

const Farmer = mongoose.models.farmers || mongoose.model('farmer', farmerSchema);

export default Farmer;