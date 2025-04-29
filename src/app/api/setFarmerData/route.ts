"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Farmer from "@/schema/farmerSchema";
import Collector from "@/schema/collectorSchema";

dbConnect();

// export async function GET(req: NextRequest, res: NextResponse) {

//     //find user in the database
//     const userFound = await User.findOne({ userID: 'kindeUser?.id' });
//     // console.log(userFound);
//     //if user is not found then save the user
//     if (!userFound) {

//         try {
//             const savedFarmer = await User.create('user');
//             await savedFarmer.save();
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
    // console.log("Request body: ", body);
    // find user in the database
    const farmerFound = await Farmer.findOne({ name: body?.name });
    // console.log(farmerFound);
    //if user is not found then save the user
    const data = {
        name: body?.name,
        temperature: '',
        humidity: '',
        moisture: '',
        pump: '',
        yield: {
            potato: body?.potato,
            onion: body?.onion,
            tomato: body?.tomato
        }
    }

    if (!farmerFound) {

        try {
            const savedFarmer = await Farmer.create(data);
            await savedFarmer.save();
        } catch (error) {
            console.log(error);
            return Response.json({ message: "error occured while saving" }, { status: 500 })
        }

    }

    const farmer = await Farmer.findByIdAndUpdate(farmerFound?._id, { yield: data.yield }, { new: true });
    const collector = await Collector.findOne({});

    const collectorUpdate = await Collector.findByIdAndUpdate(
        collector?._id,
        {
            $set: {
                potato: { ...collector?.potato, stock: parseFloat(collector?.potato.stock) + parseFloat(data.yield.potato) },
                onion: { ...collector?.onion, stock: parseFloat(collector?.onion.stock) + parseFloat(data.yield.onion) },
                tomato: { ...collector?.tomato, stock: parseFloat(collector?.tomato.stock) + parseFloat(data.yield.tomato) },
            }
        },
        { new: true });
    console.log('collector: ', collectorUpdate);

    // saving the job details

    return Response.json({ message: "set details" }, { status: 200 })
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    console.log(searchParams.get('name'));

    // e.g. Insert new user into your DB
    const farmer = await Farmer.findOne({ name: searchParams.get('name') });

    return Response.json(farmer, { status: 201, });
}