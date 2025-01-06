import { Questionnaire } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export type formKuesioner ={
    title:string,
    description:string,
    isActived: string,
    archived: string 
}

export default function CreateKuesioner() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<formKuesioner>({
        title: "",
        description: "",
        isActived: "",
        archived: "",
    });

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
            const res = await axios.post(`/api/kuesioner`, form, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.status === 201) {
                alert("Kuesioner berhasil dibuat!");
                handleCloseModal();
                router.refresh(); // Refresh halaman untuk memuat data baru
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat membuat kuesioner.");
        }
    };

    return (
        <>
            {/* Button to Open Modal */}
            <button
                onClick={handleOpenModal}
                className="rounded bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-1 text-white hover:bg-green-600"
            >
                Tambah Kuesioner
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Create Kuesioner</h2>
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
                                    placeholder="Enter name"
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
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="isActived" className="block text-sm font-medium text-gray-700">
                                    Actived
                                </label>
                                <input
                                    type="checkbox"
                                    value={form.isActived || ""}
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
                                    value={form.archived || ""}
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
                                    className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600 mr-2"
                                >
                                    Tambah
                                </button>

                                <button
                                    type="button"
                                    className="rounded bg-green-500 px-3 py-1 text-sm font-medium text-white hover:bg-green-600"
                                >
                                    Pertanyaan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );

}