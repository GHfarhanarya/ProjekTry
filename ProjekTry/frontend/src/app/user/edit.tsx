import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";


type formUser = {
    name: string;
    email: string;
    password: string;
    role: string;
}
export default function EditUser({ user }: { user: User }) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<formUser>({ name: user.name, email: user.email, password: "", role: user.role });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/users/${user.id}`, form, { headers: { "Content-Type": "application/json" } });
            handleCloseModal();
            router.refresh()

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <>
            {/* Button to Open Modal */}
            <button
                onClick={handleOpenModal}
                className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
            >
                Edit
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Edit User</h2>
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
                                    onChange={e => handleChange(e)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    value={form.email}
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={e => handleChange(e)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Change Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={e => handleChange(e)}
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
                                    onChange={e => handleChange(e)}
                                    id="role"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="editor">Editor</option>
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
                                <button type="submit" className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
