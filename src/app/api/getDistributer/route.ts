"use server"
import { NextRequest } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Distributer from "@/schema/distributerSchema";
import Vendor from "@/schema/venderSchema";

dbConnect();

export async function GET(request: NextRequest) {

    const distributer = await Distributer.find({});
    // console.log('distributer: ', distributer);

    const inquiry = Vendor.find({});

    distributer[0].potato.inquiry = 0;
    distributer[0].onion.inquiry = 0;
    distributer[0].tomato.inquiry = 0;

    (await inquiry).forEach((item: any) => {
        distributer[0].potato.inquiry += parseInt(item.potato);
        distributer[0].onion.inquiry += parseInt(item.onion);
        distributer[0].tomato.inquiry += parseInt(item.tomato);
    }
    );

    return Response.json(distributer, { status: 200 });
}

export async function POST(request: NextRequest) {
    // Parse the request body
    const body = await request.json();
    
    const distributer = await Distributer.findOneAndUpdate({}, { $set: body }, { new: true });
    console.log(distributer);

    return Response.json(distributer, { status: 201, });
}