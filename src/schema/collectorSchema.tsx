"use server"
import mongoose from "mongoose";

const collectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter collector name"],
        unique: true,
    },
    potato: {
        type: JSON,
    },
    onion: {
        type: JSON,
    },
    tomato: {
        type: JSON,
    },

}, { timestamps: true })

const Collector = mongoose.models.collectors || mongoose.model('collector', collectorSchema);

export default Collector;