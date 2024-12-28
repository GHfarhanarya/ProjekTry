'use client';

import { Alumni } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DeleteAlumni({ alumni }: { alumni: Alumni }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/alumnis/${alumni.id}`); // Endpoint API untuk menghapus data alumni
      handleCloseModal();
      router.refresh(); // Refresh halaman untuk memuat ulang data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        onClick={handleOpenModal}
        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
      >
        Hapus
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Hapus Alumni</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <p className="text-sm text-gray-700">
              Apakah Anda yakin ingin menghapus alumni <strong>{alumni.name}</strong>?
            </p>

            {/* Modal Footer */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="rounded bg-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-400 mr-2"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="rounded bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
