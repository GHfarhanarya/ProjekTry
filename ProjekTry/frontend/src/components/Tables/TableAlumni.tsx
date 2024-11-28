const alumniData = [
  {
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@example.com",
    phone: "081234567890",
    address: "Jl. Melati No. 12, Jakarta",
    graduationYear: 2020,
    program: "Teknik Informatika",
    employmentStatus: "Bekerja",
    registrationDate: "2023-11-10",
  },
  {
    name: "Siti Rahma",
    email: "siti.rahma@example.com",
    phone: "085678901234",
    address: "Jl. Kenanga No. 34, Bandung",
    graduationYear: 2019,
    program: "Sistem Informasi",
    employmentStatus: "Belum Bekerja",
    registrationDate: "2023-10-25",
  },
  {
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    phone: "082345678901",
    address: "Jl. Mawar No. 45, Surabaya",
    graduationYear: 2021,
    program: "Teknik Elektro",
    employmentStatus: "Bekerja",
    registrationDate: "2023-09-15",
  },
  {
    name: "Dewi Lestari",
    email: "dewi.lestari@example.com",
    phone: "089876543210",
    address: "Jl. Anggrek No. 56, Yogyakarta",
    graduationYear: 2018,
    program: "Teknik Sipil",
    employmentStatus: "Bekerja",
    registrationDate: "2023-08-05",
  },
];



const AlumniTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Tabel Alumni
      </h4>

      <div className="flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-6 gap-x-4 rounded-sm bg-gray-2 py-3 px-4 text-left text-sm font-medium uppercase dark:bg-meta-4 dark:text-gray-300">
          <div>Nama</div>
          <div>Email</div>
          <div>Tahun Kelulusan</div>
          <div>Prodi</div>
          <div>Status Kerja</div>
          <div>Aksi</div>
        </div>

        {/* Isi Tabel */}
        {alumniData.map((alumni, key) => (
          <div
            className={`grid grid-cols-6 gap-x-4 py-3 px-4 text-left text-sm ${
              key === alumniData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="truncate text-black dark:text-white">
              {alumni.name}
            </div>
            <div className="truncate text-black dark:text-white">
              {alumni.email}
            </div>
            <div className="text-black dark:text-white">
              {alumni.graduationYear}
            </div>
            <div className="truncate text-black dark:text-white">
              {alumni.program}
            </div>
            <div
              className={`${
                alumni.employmentStatus === "Bekerja"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {alumni.employmentStatus}
            </div>
            <div className="flex justify-start gap-2">
              {/* Tombol Edit */}
              <button
                className="rounded bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600"
                // onClick={() => console.log(`Edit: ${alumni.name}`)}
              >
                Edit
              </button>
              {/* Tombol Delete */}
              <button
                className="rounded bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600"
                // onClick={() => console.log(`Delete: ${alumni.name}`)}
              >
                Delete
              </button>
              {/* Tombol Detail */}
              <button
                className="rounded bg-gray-500 px-3 py-1 text-xs font-medium text-white hover:bg-gray-600"
                // onClick={() => console.log(`Detail: ${alumni.name}`)}
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTable;

