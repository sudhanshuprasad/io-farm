"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Collector from "@/schema/collectorSchema";

dbConnect();

// export async function GET(req: NextRequest, res: NextResponse) {

//     //find user in the database
//     const userFound = await User.findOne({ userID: 'kindeUser?.id' });
//     // console.log(userFound);
//     //if user is not found then save the user
//     if (!userFound) {

//         try {
//             const savedCollector = await User.create('user');
//             await savedCollector.save();
//         } catch (error) {
//             console.log(error);
//             return Response.json({ message: "error occured while saving the user" }, { status: 500 })
//         }

//     }

//     // saving the job details

//     return Response.json({ message: "set details" }, { status: 200 })
// }


export async function POST(req: NextRequest) {

    const body = await req.json();
    console.log("Request body: ", body);
    // find user in the database
    const farmerFound = await Collector.findOne({ name: body?.name });
    // console.log(farmerFound);
    //if user is not found then save the user
    const data = {
        name: body?.name,
        potato: body?.potato,
        onion: body?.onion,
        tomato: body?.tomato
    }

    if (!farmerFound) {

        try {
            const savedCollector = await Collector.create(data);
            await savedCollector.save();
        } catch (error) {
            console.log(error);
            return Response.json({ message: "error occured while saving" }, { status: 500 })
        }

    }

    const farmer = await Collector.findByIdAndUpdate(farmerFound?._id, data, { new: true });
    // console.log('farmer: ', farmer);

    // saving the job details

    return Response.json({ message: "set details" }, { status: 200 })
}

// export async function POST(request: NextRequest) {
//     // Parse the request body
//     const body = await request.json();
//     const { name } = body;

//     // e.g. Insert new user into your DB
//     const newUser = { id: Date.now(), name };

//     return new Response(JSON.stringify(newUser), {
//         status: 201,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }