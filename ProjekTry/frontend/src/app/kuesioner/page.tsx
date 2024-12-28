import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableKuesioner from "@/app/kuesioner/TableKue";
import axios from "axios";
import { Questionnaire } from "@prisma/client";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const fetchKuesioner = async () => {
  return (await axios.get("http://localhost:3000/api/kuesioner")).data
}

const KuePage = async() => {
  const kuesioners: Questionnaire[] = (await fetchKuesioner()).data || []
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Daftar Kuesioner" />

      <div className="flex flex-col gap-10">
        <TableKuesioner kuesioner={kuesioners} />
      </div>
    </DefaultLayout>
  );
};

export default KuePage;
