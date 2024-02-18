import connectMongodb from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextRequest, NextResponse } from "next/server"




export async function POST (request){
const {title,description}= await request.json()
await connectMongodb();

await Topic.create({title,description})
return NextResponse.json({message:'topic is create'},{status:201}) 
}
export async function GET(request){
    await connectMongodb();
const topics = await Topic.find()
return NextResponse.json({topics},{status:201}) 
}
export async function DELETE(request){

    const id=request.nextUrl.searchParams.get('id')
    await connectMongodb()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:'topic is delete'},{status:201}) 
}
