"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Farmer from "@/schema/farmerSchema";

dbConnect();

// export async function GET(req: NextRequest, res: NextResponse) {

//     // // let user:object = {
//     // //     fullName: `${kindeUser?.given_name} ${kindeUser?.family_name}`,
//     // //     email: kindeUser?.email,
//     // //     userID: kindeUser?.id,
//     // //     profileImage: kindeUser?.picture
//     // // }
//     // // if (typeof(kindeUser?.phone_number) === 'string') {
//     // //     user= {...user, phoneNumber: kindeUser?.phone_number}
//     // // }

//     // //find user in the database
//     // const userFound = await User.findOne({ userID: 'kindeUser?.id' });
//     // // console.log(userFound);
//     // //if user is not found then save the user
//     // if (!userFound) {

//     //     try {
//     //         const savedUser = await User.create('user');
//     //         await savedUser.save();
//     //     } catch (error) {
//     //         console.log(error);
//     //         return Response.json({ message: "error occured while saving the user" }, { status: 500 })
//     //     }

//     // }

//     // // saving the job details

//     return Response.json({ message: "set details" }, { status: 200 })
// }

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const params: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
        if (!params[key]) {
            params[key] = searchParams.getAll(key);
        }
    });

    console.log("Query Parameters:", params);

    // const data = searchParams.getAll('');  
    console.log(params);
    const data = {
        name: params?.name[0],
        temperature: params?.temp[0],
        humidity: params?.humidity[0],
        moisture: params?.moisture[0],
        // yield: {
        //     potato: params?.potato,
        //     onion: params?.onion,
        //     tomato: params?.tomato
        // }
    }
    // For example, fetch data from your DB here

    // const farmer = await Farmer.find({});
    // console.log('farmer: ', farmer);
    const farmer = await Farmer.findOneAndUpdate({ name: data?.name }, { $set: data }, { new: true });
    console.log('farmer: ', farmer);

    return Response.json({ message: "set details", params }, { status: 200 });
}

export async function POST(request: NextRequest) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;

    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}