import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config"; 

export async function PUT(req: NextRequest) {
    try {
        const id = req.nextUrl.pathname.split("/").pop();

        // Ambil data dari request body
        const { 
            name, 
            email, 
            phone, 
            address, 
            graduationYear, 
            programStudy, 
            employmentStatus 
        } = await req.json();

        // Validasi input
        if (
            !name || 
            !email || 
            !phone || 
            !address || 
            !graduationYear || 
            !programStudy || 
            !employmentStatus
        ) {
            return NextResponse.json({
                success: false,
                msg: "Harap isi seluruh input!"
            }, { status: 400 });
        }

        // Perbarui data pada tabel Alumni
        const updatedAlumni = await db.alumni.update({
            where: { id: Number(id) },
            data: {
                name,
                email,
                phone,
                address,
                graduationYear,
                programStudy,
                employmentStatus
            }
        });

        // Respons sukses
        return NextResponse.json({
            success: true,
            msg: "Berhasil mengubah data alumni",
            data: updatedAlumni
        }, { status: 200 });
    } catch (error: any) {
        console.error('Error saat mengubah data alumni:', error);
        return NextResponse.json({
            success: false,
            msg: "Internal server error",
            error: error.message
        }, { status: 500 });
    }
}
