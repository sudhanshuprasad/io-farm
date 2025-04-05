"use server"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/mongoConfig";
import Distributer from "@/schema/distributerSchema";

dbConnect();

export async function GET(request: NextRequest) {
   
    const distributer = await Distributer.find({});
    console.log('distributer: ', distributer);

    return Response.json(distributer, { status: 200 });
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