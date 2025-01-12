'use client'

import { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import EditUser from "./edit";
import DeleteUser from "./delete"; // Import komponen DeleteUser
import CreateUser from "./create";

const TableUser = ({ user }: { user: User }) => {
  const users: User[] = user;

  // useEffect(()=>{
  //   try {
  //     const fetch = async()=>{
  //       const res = await axios.get("/api/users");

  //       setUsers(res.data.data)
  //     }

  //     fetch()
  //   } catch (error) {
  //     console.log(error);

  //   }
  // },[])
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Daftar Pengguna
        </h4>
        <CreateUser user={user} />
      </div>

      <div className="flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
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
            <h5 className="text-sm font-medium uppercase xsm:text-base">Peran</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
          </div>
        </div>

        {/* Isi Tabel */}
        {users?.map((user, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-7 ${key === users.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
              }`}
            key={user.id}
          >
            {/* Ganti ID dengan nomor urut */}
            <div className="flex items-center justify-start p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{key + 1}</p>
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

            <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">

              <EditUser user={user} />
              <DeleteUser user={user} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableUser;
