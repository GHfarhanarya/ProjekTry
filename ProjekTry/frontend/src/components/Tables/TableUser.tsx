import Image from "next/image";

// Data dummy untuk tabel baru
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Aktif",
    registrationDate: "2023-11-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Nonaktif",
    registrationDate: "2023-10-15",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "User",
    status: "Aktif",
    registrationDate: "2023-09-20",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "Pimpinan",
    status: "Aktif",
    registrationDate: "2023-08-10",
  },
];

const TableUser = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Daftar Pengguna
      </h4>

      <div className="flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">ID</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Nama</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Peran</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tanggal Daftar
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
          </div>
        </div>

        {/* Isi Tabel */}
        {userData.map((user, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-7 ${
              key === userData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={user.id}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.id}</p>
            </div>

            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.role}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                className={`${
                  user.status === "Aktif" ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.status}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {user.registrationDate}
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

export default TableUser;
