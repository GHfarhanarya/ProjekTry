// app/api/questionnaire/questionnaireActions.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config";

export async function PUT(req: NextRequest) {
    try {
        const id = req.nextUrl.pathname.split("/").pop();  // Ambil ID dari URL
        const { title, description, isActive, archived } = await req.json();

        // Mencari kuesioner berdasarkan ID
        const existingKuesioner = await db.questionnaire.findUnique({
            where: { id: Number(id) },
        });

        if (!existingKuesioner) {
            return NextResponse.json({
                success: false,
                msg: "Kuesioner tidak ditemukan!",
            }, { status: 404 });
        }

        // Update data kuesioner hanya dengan data yang ada
        const updatedKuesioner = await db.questionnaire.update({
            where: { id: Number(id) },
            data: {
                title: title || existingKuesioner.title,       // Jika tidak ada perubahan, tetap menggunakan nilai lama
                description: description || existingKuesioner.description,
                isActive: isActive !== undefined ? isActive === "true" : existingKuesioner.isActive,
                archived: archived !== undefined ? archived === "true" : existingKuesioner.archived,
            },
        });

        return NextResponse.json({
            success: true,
            msg: "Berhasil mengubah data kuesioner",
            data: updatedKuesioner,
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const id = req.nextUrl.pathname.split("/").pop();  // Ambil ID dari URL

        // Cek apakah kuesioner ada
        const existingKuesioner = await db.questionnaire.findUnique({
            where: { id: Number(id) },
        });

        if (!existingKuesioner) {
            return NextResponse.json({
                success: false,
                msg: "Kuesioner tidak ditemukan!",
            }, { status: 404 });
        }

        // Hapus kuesioner
        const deletedKuesioner = await db.questionnaire.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({
            success: true,
            msg: "Berhasil menghapus kuesioner",
            data: deletedKuesioner.title,  // Menampilkan nama kuesioner yang dihapus
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        }, { status: 500 });
    }
}
