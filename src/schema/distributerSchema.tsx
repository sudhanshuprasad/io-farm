"use server"
import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter farmer name"],
        unique: true,
    },
    potato: {
        type: String,
    },
    onion: {
        type: String,
    },
    tomato: {
        type: String,
    },
    lat: {
        type: String,
    },
    lon: {
        type: String,
    },

}, { timestamps: true })

const Farmer = mongoose.models.farmers || mongoose.model('farmer', farmerSchema);

export default Farmer;