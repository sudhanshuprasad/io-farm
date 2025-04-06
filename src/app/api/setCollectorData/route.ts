"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Collector from "@/schema/collectorSchema";
import Farmer from "@/schema/farmerSchema";
import Vender from "@/schema/venderSchema";
import Distributer from "@/schema/distributerSchema";

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

    const distributer = await Distributer.findOne({});
    distributer.potato.stock = parseFloat(distributer.potato.stock) + parseFloat(body?.potato?.sell);
    distributer.onion.stock = parseFloat(distributer.onion.stock) + parseFloat(body?.onion?.sell);
    distributer.tomato.stock = parseFloat(distributer.tomato.stock) + parseFloat(body?.tomato?.sell);

    const distributerUpdate = await Distributer.findOneAndUpdate({}, {
        $set: {
            potato: distributer.potato,
            onion: distributer.onion,
            tomato: distributer.tomato
        }
    }, { new: true });
    console.log(distributerUpdate);

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

    return Response.json(farmer, { status: 200 })
}






export async function GET(request: NextRequest) {

    // // e.g. Insert new user into your DB
    // const allFarmer = await Farmer.find({});
    // const allVender = await Vender.find({});
    // // console.log(allFarmer);
    // let { potato_inquiry, onion_inquiry, tomato_inquiry, potato_sell, onion_sell, tomato_sell, potato, onion, tomato } = {
    //     potato_inquiry: 0,
    //     onion_inquiry: 0,
    //     tomato_inquiry: 0,
    //     potato_sell: 0,
    //     onion_sell: 0,
    //     tomato_sell: 0,
    //     potato: 0,
    //     onion: 0,
    //     tomato: 0
    // };
    // allFarmer.forEach((farmer) => {
    //     potato += parseInt(farmer?.yield?.potato);
    //     onion += parseInt(farmer?.yield?.onion);
    //     tomato += parseInt(farmer?.yield?.tomato);
    // });
    // allVender.forEach((vender) => {
    //     potato_inquiry += parseInt(vender?.potato);
    //     onion_inquiry += parseInt(vender?.onion);
    //     tomato_inquiry += parseInt(vender?.tomato);
    // });
    // allFarmer.forEach((farmer) => {
    //     potato_sell += parseInt(farmer?.potato);
    //     onion_sell += parseInt(farmer?.onion);
    //     tomato_sell += parseInt(farmer?.tomato);
    // });

    // const result = {
    //     potato_inquiry: potato_inquiry,
    //     onion_inquiry: onion_inquiry,
    //     tomato_inquiry: tomato_inquiry,
    //     potato_sell: potato_sell,
    //     onion_sell: onion_sell,
    //     tomato_sell: tomato_sell,
    //     potato: potato,
    //     onion: onion,
    //     tomato: tomato
    // }
    // console.log(result);
    // allFarmer.forEach((farmer) => {
    //     console.log(farmer?.name, farmer?.yield);
    // });

    const collector = await Collector.findOne({});
    console.log(collector);

    return Response.json(collector, { status: 201, });
}