"use server"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter your Name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
    },
    userID: {
        type: String,
        required: [true, "Please enter your userID"],
        unique: true,
    },
    profileImage: {
        type: String,
        // required: [true, "Please enter your profile image"],
    },

}, { timestamps: true })

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;