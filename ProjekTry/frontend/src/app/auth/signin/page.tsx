"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LayoutBlank from "@/components/Layouts/LayoutBlank";

const SignIn: React.FC = () => {
  // State untuk mengelola input email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menghandle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login berhasil, lakukan sesuatu dengan data user (misalnya simpan ke state atau localStorage)
        console.log("Login berhasil:", data);
        // Redirect ke halaman lain jika perlu
        window.location.href = "/";
      } else {
        // Jika ada error dari API
        setError(data.msg || "Login gagal. Silakan coba lagi.");
      }
    } catch (err: any) {
      setError("Terjadi kesalahan server. Silakan coba lagi.");
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutBlank>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <h1 className="mt-2 text-3xl font-semibold text-black">Tracer Study</h1>
              </Link>
              <p className="2xl:px-20">Selamat Datang</p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Masuk ke Akun Anda
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="masukkan email anda"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="isi password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="mb-4 text-red-500">
                    {error}
                  </div>
                )}

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white transition hover:bg-opacity-90"
                    disabled={loading}
                  >
                    {loading ? "memuat halaman..." : "Masuk"}
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have an account?{" "}
                    <Link href="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
};

export default SignIn;
