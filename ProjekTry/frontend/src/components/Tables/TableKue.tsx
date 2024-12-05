import React from "react";

// Data dummy untuk tabel kuesioner
const questionnaireData = [
  {
    id: 1,
    title: "Survei Kepuasan Pelanggan",
    description: "Mengukur tingkat kepuasan pelanggan terhadap layanan.",
    createdAt: "2023-11-01",
    status: "Aktif",
  },
  {
    id: 2,
    title: "Survei Kebahagiaan Karyawan",
    description: "Menilai kebahagiaan karyawan di tempat kerja.",
    createdAt: "2023-10-15",
    status: "Tidak Aktif",
  },
  {
    id: 3,
    title: "Survei Preferensi Produk",
    description: "Mengetahui preferensi pelanggan terhadap produk baru.",
    createdAt: "2023-09-20",
    status: "Aktif",
  },
];

const TableKuesioner = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {/* Header dengan Title dan Tombol Tambah */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Daftar Kuesioner
        </h4>
        <button className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          Tambah Kuesioner
        </button>

      </div>

      <div className="flex flex-col">
        {/* Header Tabel */}
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Judul Kuesioner
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Deskripsi
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tanggal Dibuat
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
          </div>
        </div>

        {/* Isi Tabel */}
        {questionnaireData.map((questionnaire, key) => (
          <div
            className={`grid grid-cols-5 ${key === questionnaireData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
              }`}
            key={questionnaire.id}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{questionnaire.title}</p>
            </div>

            <div className="flex items-center p-2.5 xl:p-5">
              <p className="truncate text-black dark:text-white">
                {questionnaire.description}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {questionnaire.createdAt}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                className={`${questionnaire.status === "Aktif"
                    ? "text-green-500"
                    : "text-red-500"
                  }`}
              >
                {questionnaire.status}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">
              <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                Edit
              </button>
              <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableKuesioner;
