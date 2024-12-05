// AlumniDetailModal.tsx
import React from "react";

interface AlumniDetailModalProps {
  alumni: {
    name: string;
    email: string;
    phone: string;
    address: string;
    graduationYear: number;
    program: string;
    employmentStatus: string;
    registrationDate: string;
  };
  closeModal: () => void;
}

const AlumniDetailModal: React.FC<AlumniDetailModalProps> = ({ alumni, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Detail Alumni</h2>
        <div className="mb-2">
          <strong>Nama:</strong> {alumni.name}
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {alumni.email}
        </div>
        <div className="mb-2">
          <strong>No. Telp:</strong> {alumni.phone}
        </div>
        <div className="mb-2">
          <strong>Alamat:</strong> {alumni.address}
        </div>
        <div className="mb-2">
          <strong>Tahun Kelulusan:</strong> {alumni.graduationYear}
        </div>
        <div className="mb-2">
          <strong>Prodi:</strong> {alumni.program}
        </div>
        <div className="mb-2">
          <strong>Status Kerja:</strong> {alumni.employmentStatus}
        </div>
        <div className="mb-2">
          <strong>Tanggal Registrasi:</strong> {alumni.registrationDate}
        </div>

        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={closeModal} // Menutup modal
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default AlumniDetailModal;
