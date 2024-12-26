import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config";


export async function GET() {
    try {
        const alumnis = await db.alumni.findMany({ orderBy: { id: "asc" },where:{
            NOT: {
                id:{
                    in: (await db.user.findMany({select: { alumniId: true },})).map(user=>user.alumniId!).filter(ids=>ids!==null)
                }
            }
        } });

        return NextResponse.json({
            success: true,
            msg: "Berhasil mendapatkan data alumni",
            data: alumnis
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

        // Buat entri baru di tabel Alumni
        const newAlumni = await db.alumni.create({
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

        // Kirim respons sukses
        return NextResponse.json({
            success: true,
            msg: "Berhasil menambahkan data alumni",
            data: newAlumni
        });

    } catch (error) {
        console.error('Error saat menambahkan data alumni:', error);
        return NextResponse.json({
            success: false,
            msg: "Terjadi kesalahan saat menambahkan data alumni"
        }, { status: 500 });
    }
}
