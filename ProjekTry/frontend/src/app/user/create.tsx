import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

type formUser = {
    name: string;
    email: string;
    password: string | null;
    role: string;
};

type Alumni = {
    id: number;
    email: string;
};

export default function CreateUser() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<formUser>({
        name: "",
        email: "",
        password: null,
        role: "viewer", // Default role
    });
    const [alumniList, setAlumniList] = useState<Alumni[]>([]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const fetchAlumni = async () => {
        try {
            const res = await axios.get("/api/alumnis/get"); // Endpoint untuk mendapatkan daftar alumni
            if (res.status === 200) {
                setAlumniList(res.data.data);
            }
        } catch (error) {
            console.error("Failed to fetch alumni:", error);
        }
    };

    useEffect(() => {
        if (isModalOpen) fetchAlumni(); // Ambil data alumni ketika modal dibuka
    }, [isModalOpen]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/users`, form, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.status === 201) {
                alert("User berhasil dibuat!");
                handleCloseModal();
                router.refresh(); // Refresh halaman untuk memuat data baru
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat membuat user.");
        }
    };

    return (
        <>
            {/* Button to Open Modal */}
            <button
                onClick={handleOpenModal}
                className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
            >
                Create User
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Create User</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    value={form.name}
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email (from Alumni)
                                </label>
                                <select
                                    value={form.email}
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                >
                                    <option value="" disabled>
                                        Select an alumni email
                                    </option>
                                    {alumniList.map((alumni) => (
                                        <option key={alumni.id} value={alumni.email}>
                                            {alumni.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={form.password || ""}
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <select
                                    value={form.role}
                                    name="role"
                                    onChange={handleChange}
                                    id="role"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="alumni">Alumni</option>
                                    <option value="viewer">Viewer</option>
                                </select>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-end">
                                <button
                                    onClick={handleCloseModal}
                                    className="rounded bg-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-400 mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
