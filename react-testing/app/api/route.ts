import next from "next";
import { NextResponse,NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    const data={
        name:"hammad",
        age:20,
    }
    return NextResponse.json(data)

}
export default async function POST(request:NextRequest) {
    return NextResponse.json("this is post method")
    
}