import { NextRequest, NextResponse } from "next/server";
import { db } from "../config"; // Pastikan ini adalah prisma instance Anda
import bcrypt from "bcrypt";

// Handle GET request
export async function GET() {
    try {
        const users = await db.user.findMany({ orderBy: { id: "asc" } });

        return NextResponse.json({
            success: true,
            msg: "Berhasil mendapatkan data",
            data: users,
        });
    } catch (error: any) {
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

// Handle POST request
export async function POST(req: NextRequest) {
    try {
        const { name, email, password, role } = await req.json();

        // Validasi input
        if (!name || !email || !role) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "Harap isi seluruh input!",
                },
                { status: 400 }
            );
        }

        // Cek apakah email sudah digunakan
        const existingUser = await db.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "Email sudah terdaftar, gunakan email lain.",
                },
                { status: 400 }
            );
        }

        const alumni = await db.alumni.findFirst({where: {email}})

        // Tambahkan user baru
        const hashedPassword = await bcrypt.hash((password ||"123456"), 10); // Pastikan bcrypt diimport
        const newUser = await db.user.create({
            data: {
                email,
                name,
                password: hashedPassword, // Simpan password yang di-hash
                role,
                alumniId: alumni?.id
            },
        });

        return NextResponse.json({
            success: true,
            msg: "Berhasil menambahkan data",
            data: newUser,
        },{status:201});
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

