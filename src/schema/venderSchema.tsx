"use server"
import mongoose from "mongoose";

const venderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter vender name"],
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
    yield: {
        type: JSON,
    },

}, { timestamps: true })

const Vendor = mongoose.models.venders || mongoose.model('vender', venderSchema);

export default Vendor;