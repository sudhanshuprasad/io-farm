"use server"
import mongoose from "mongoose";

const distributerSchema = new mongoose.Schema({
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

const Distributer = mongoose.models.distributers || mongoose.model('distributer', distributerSchema);

export default Distributer;