import { NextRequest, NextResponse } from "next/server";
import { db } from "../config";

export async function GET() {
    try {
        const questionnaire= await db.questionnaire.findMany({orderBy:{id: "asc"}})

        return NextResponse.json({
            success: true,
            msg: "Berhasil mendapatkan data",
            data: questionnaire,
        });
    } catch (error: any) {
        console.error("Error during user creation:", error);
        return NextResponse.json(
            {
                success: false,
                msg: "Internal server error",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const {title,description,isActive,archived} = await request.json()

        if (!title || !description || !isActive ||!archived) {
                    return NextResponse.json(
                        {
                            success: false,
                            msg: "Harap isi seluruh input!",
                        },
                        { status: 400 }
                    );
                }

                const newKuesioner= await db.questionnaire.create({
                    data:{
                        title,
                        description,
                        isActive: isActive=== "true"?true:false,
                        archived: archived=== "true"?true:false
                    }
                })

                return NextResponse.json({
                    success:true,
                    msg: "Berhasil Menambahkan Kuesioner",
                    data: newKuesioner,
                },{status:201})
    } catch (error: any) {
        console.error("Error during user creation:", error);
        return NextResponse.json(
            {
                success: false,
                msg: "Internal server error",
                error: error.message,
            },
            { status: 500 }
        );
    }
}