"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import User from "@/schema/farmerSchema";

dbConnect();

export async function GET(req: NextRequest, res: NextResponse) {

    // let user:object = {
    //     fullName: `${kindeUser?.given_name} ${kindeUser?.family_name}`,
    //     email: kindeUser?.email,
    //     userID: kindeUser?.id,
    //     profileImage: kindeUser?.picture
    // }
    // if (typeof(kindeUser?.phone_number) === 'string') {
    //     user= {...user, phoneNumber: kindeUser?.phone_number}
    // }

    //find user in the database
    const userFound = await User.findOne({ userID: 'kindeUser?.id' });
    // console.log(userFound);
    //if user is not found then save the user
    if (!userFound) {

        try {
            const savedUser = await User.create('user');
            await savedUser.save();
        } catch (error) {
            console.log(error);
            return Response.json({ message: "error occured while saving the user" }, { status: 500 })
        }

    }

    // saving the job details

    return Response.json({ message: "set details" }, { status: 200 })
}