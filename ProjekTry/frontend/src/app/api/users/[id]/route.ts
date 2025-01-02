import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config";
import bcrypt from "bcrypt";

export async function PUT(req:NextRequest) {
    try {
        const id = req.nextUrl.pathname.split("/").pop();

        const { name, email, password ,role} = await req.json();

        // if (!name || !email || !password|| !role) {
        //     return NextResponse.json({
        //         success: false,
        //         msg: "Harap isi seluruh input!"
        //     }, { status: 400 })
        // }
        const hashedPassword = await bcrypt.hash((password ||"123456"), 10);
        const editUser = await db.user.update({
            data: {
                email, name, password: hashedPassword, role
            },
            where:{
                id: Number(id)
            }
        })

        return NextResponse.json({
            success: true,
            msg: "Berhasil mangubah data",
            data: editUser
        }, {status:200})
    } catch (error: any) {
        return NextResponse.json({
            success: true,
            msg: "Internal server error",
            error: error.message
        }, { status: 500 })
    }
}

export async function DELETE(req:NextRequest) {
    try {
        const id = req.nextUrl.pathname.split("/").pop();

        const userExists = await db.user.findFirst({
            where: {id: Number(id)}
        });

        if(!userExists){
            return NextResponse.json({
                success: false,
                msg: "User tidak ditemukan!"
            }, { status: 404 });
        }

        const deletedUser = await db.user.delete({
            where: {id: Number(id)}
        })

        return NextResponse.json({
            success: true,
            msg: "Berhasil menghapus data",
            data: deletedUser.name
        }, {status:200})
    } catch (error:any) {
        return NextResponse.json({
            success: true,
            msg: "Internal server error",
            error: error.message
        }, { status: 500 })
    }
}