'use client'

import { Alumni } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteAlumni from "./delete";
import EditAlumni from "./edit";
import CreateAlumni from "./create";
// import EditAlumni from "./edit"; // Komponen EditAlumni
// import DeleteAlumni from "./delete"; // Komponen DeleteAlumni
// import CreateAlumni from "./create"; // Komponen CreateAlumni

const TableAlumni = ({ alumni }: { alumni: Alumni[] }) => {
  const alumniData: Alumni[] = alumni ||[];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Daftar Alumni
        </h4>
        <CreateAlumni alumni={alumniData} />
      </div>

      <div className="flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-7 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-8">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">No</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Nama</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Tahun Kelulusan</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Prodi</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Status Kerja</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
          </div>
        </div>

        {/* Isi Tabel */}
        {alumniData?.map((alumni, key) => (
          <div
            className={`grid grid-cols-7 sm:grid-cols-8 ${key === alumniData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
              }`}
            key={alumni.id}
          >
            {/* Ganti ID dengan nomor urut */}
            <div className="flex items-center justify-start p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{key + 1}</p>
            </div>

            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{alumni.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{alumni.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{alumni.graduationYear}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{alumni.programStudy}</p>
            </div>

            <div
              className={`flex items-center justify-center p-2.5 xl:p-5 ${
                alumni.employmentStatus === "Bekerja"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <p className="text-black dark:text-white">{alumni.employmentStatus}</p>
            </div>

            <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">
              {/* Tombol Edit */}
              <EditAlumni alumni={alumni} />
              {/* Tombol Delete */}
              <DeleteAlumni alumni={alumni} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableAlumni;
