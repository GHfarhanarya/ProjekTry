import { NextRequest, NextResponse } from "next/server";
import { db } from "../config";

export async function GET() {
    try {
        const users = await db.user.findMany({ orderBy: { id: "asc" } });

        return NextResponse.json({
            success: true,
            msg: "Berhasil mendapatkan data",
            data: users
        })
    } catch (error: any) {
        return NextResponse.json({
            success: true,
            msg: "Internal server error",
            error: error.message
        }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, password , role} = await req.json();

        if (!name || !email || !password || !role) {
            return NextResponse.json({
                success: false,
                msg: "Harap isi seluruh input!"
            }, { status: 400 })
        }

        const newUser = await db.user.create({
            data: {
                email, name, password, role
            }
        })

        return NextResponse.json({
            success: true,
            msg: "Berhasil menambahkan data",
            data: newUser
        })
    } catch (error) {

    }
}