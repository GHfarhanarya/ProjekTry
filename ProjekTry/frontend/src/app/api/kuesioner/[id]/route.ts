// app/api/questionnaire/questionnaireActions.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config";

// Mengedit kuesioner berdasarkan ID
export async function PUT(request: NextRequest) {
    try {
        const { id, title, description, isActive, archived } = await request.json();

        if (!id || !title || !description || isActive === undefined || archived === undefined) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "Harap isi seluruh input termasuk ID!",
                },
                { status: 400 }
            );
        }

        const updatedKuesioner = await db.questionnaire.update({
            where: { id },
            data: {
                title,
                description,
                isActive: isActive === "true" ? true : false,
                archived: archived === "true" ? true : false,
            },
        });

        return NextResponse.json({
            success: true,
            msg: "Berhasil Mengupdate Kuesioner",
            data: updatedKuesioner,
        });
    } catch (error: any) {
        console.error("Error during updating questionnaire:", error);
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

// Menghapus kuesioner berdasarkan ID
export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "ID kuesioner diperlukan!",
                },
                { status: 400 }
            );
        }

        const deletedKuesioner = await db.questionnaire.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            msg: "Berhasil Menghapus Kuesioner",
            data: deletedKuesioner,
        });
    } catch (error: any) {
        console.error("Error during deleting questionnaire:", error);
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
