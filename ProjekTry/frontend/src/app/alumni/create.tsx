import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

type formAlumni = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  graduationYear: number;
  programStudy: string;
  employmentStatus: string;
};

export default function CreateAlumni() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<formAlumni>({
    name: "",
    email: "",
    phone: "",
    address: "",
    graduationYear: new Date().getFullYear(), // Default tahun ini
    programStudy: "",
    employmentStatus: "Belum Bekerja", // Default status
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/alumnis", form, {
        headers: { "Content-Type": "application/json" },
      });
      handleCloseModal();
      router.refresh();
    } catch (error) {
      console.error("Error creating alumni:", error);
    }
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        onClick={handleOpenModal}
        className="rounded bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-1 text-white hover:bg-green-600"
      >
        Tambah Alumni
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Tambah Alumni</h2>
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
                  Nama
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
                  Email
                </label>
                <input
                  value={form.email}
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  No.Telp
                </label>
                <input
                  value={form.phone}
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter phone"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Alamat
                </label>
                <input
                  value={form.address}
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter address (optional)"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="graduationYear"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tahun Kelulusan
                </label>
                <input
                  value={form.graduationYear}
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter graduation year"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="programStudy"
                  className="block text-sm font-medium text-gray-700"
                >
                  Program Studi
                </label>
                <input
                  value={form.programStudy}
                  type="text"
                  id="programStudy"
                  name="programStudy"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter program study"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="employmentStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  value={form.employmentStatus}
                  name="employmentStatus"
                  onChange={handleChange}
                  id="employmentStatus"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="Bekerja">Bekerja</option>
                  <option value="Wiraswasta">Wiraswasta</option>
                  <option value="Studi Lanjut">Studi Lanjut</option>
                  <option value="Belum Bekerja">Belum Bekerja</option>
                </select>
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
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
