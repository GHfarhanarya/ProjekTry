import { Questionnaire } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export type formKuesioner = {
    title: string;
    description: string;
    isActived: string;
    archived: string;
};

type EditKuesionerProps = {
    kuesionerId: string; // ID kuesioner yang ingin diedit
};

export default function EditKuesioner({ quesioner }: {quesioner: Questionnaire}) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<formKuesioner>({
        title: "",
        description: "",
        isActived: "",
        archived: "",
    });

    // Fetch data kuesioner berdasarkan ID
    useEffect(() => {
        const fetchKuesioner = async () => {
            try {
                const res = await axios.get(`/api/kuesioner/${quesioner.id}`);
                const kuesioner = res.data.data;
                setForm({
                    title: kuesioner.title,
                    description: kuesioner.description,
                    isActived: kuesioner.isActive ? "true" : "false",
                    archived: kuesioner.archived ? "true" : "false",
                });
            } catch (error) {
                console.error("Error fetching kuesioner data:", error);
            }
        };

        fetchKuesioner();
    }, [quesioner]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/kuesioner/${quesioner.id}`, form, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.status === 200) {
                alert("Kuesioner berhasil diperbarui!");
                handleCloseModal();
                router.refresh(); // Refresh halaman untuk memuat data yang telah diperbarui
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat memperbarui kuesioner.");
        }
    };

    return (
        <>
            {/* Button to Open Modal */}
            <button
                onClick={handleOpenModal}
                className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-blue-600"
            >
                Edit
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Edit Kuesioner</h2>
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
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    value={form.title}
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter title"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Deskripsi
                                </label>
                                <input
                                    value={form.description}
                                    id="description"
                                    name="description"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter description"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="isActived" className="block text-sm font-medium text-gray-700">
                                    Aktif
                                </label>
                                <input
                                    type="checkbox"
                                    checked={form.isActived === "true"}
                                    id="isActived"
                                    name="isActived"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="archived" className="block text-sm font-medium text-gray-700">
                                    Arsip
                                </label>
                                <input
                                    type="checkbox"
                                    checked={form.archived === "true"}
                                    id="archived"
                                    name="archived"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-end">
                                <button
                                    onClick={handleCloseModal}
                                    className="rounded bg-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-400 mr-2"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
