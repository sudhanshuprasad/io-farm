"use server"
import mongoose from "mongoose";

const venderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter vender name"],
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

}, { timestamps: true })

const Vendor = mongoose.models.venders || mongoose.model('vender', venderSchema);

export default Vendor;