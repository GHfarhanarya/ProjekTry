'use client'

import { Questionnaire, User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateKuesioner from "./create";

const TableKuesioner = ({ kuesioner }: { kuesioner: Questionnaire[] }) => {
  const kuesioners: Questionnaire[]= kuesioner||[];

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
        <CreateKuesioner />
      </div>

      <div className="flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">No</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Title</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Description</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aktif</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Arsip</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
          </div>
        </div>

        {/* Isi Tabel */}
        {kuesioners?.map((kuesioner, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-7 ${key === kuesioners.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
              }`}
            key={kuesioner.id}
          >
            {/* Ganti ID dengan nomor urut */}
            <div className="flex items-center justify-start p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{key + 1}</p>
            </div>

            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{kuesioner.title}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{kuesioner.description}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{kuesioner.isActive? <span className="px-2 py-1 bg-green-100 text-green-500 rounded-lg text-sm">Aktif</span> : <span className="px-2 py-1 bg-red-100 text-red-500 rounded-lg text-sm">Tidak Aktif</span>}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{kuesioner.archived?<span className="px-2 py-1 bg-red-100 text-red-500 rounded-lg text-sm">Diarsipkan</span>:<span className="px-2 py-1 bg-green-100 text-green-500 rounded-lg text-sm">Tersedia</span>}</p>
            </div>

            <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">

              {/* <EditKuesioner kuesioner={kuesioner} />
              <DeleteKuesioner kuesioner={kuesioner} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableKuesioner;
