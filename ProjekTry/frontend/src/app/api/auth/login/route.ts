import { NextRequest, NextResponse } from "next/server";
import { db } from "../../config";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // Ambil data dari body request
    const { email, password } = await req.json();

    // Validasi input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, msg: "Email dan password wajib diisi!" },
        { status: 400 }
      );
    }

    // Cari user berdasarkan email
    const user = await db.user.findUnique({
      where: { email },
    });

    // Jika user tidak ditemukan
    if (!user) {
      return NextResponse.json(
        { success: false, msg: "Email atau password salah!" },
        { status: 401 }
      );
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, msg: "Email atau password salah!" },
        { status: 401 }
      );
    }

    // Kirim respons sukses dengan data user (tanpa token)
    return NextResponse.json({
      success: true,
      msg: "Login berhasil!",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error: any) {
    // Tangani error
    return NextResponse.json(
      { success: false, msg: "Terjadi kesalahan server.", error: error.message },
      { status: 500 }
    );
  }
}
