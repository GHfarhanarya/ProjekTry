import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableKuesioner from "@/components/Tables/TableKue";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const KuePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Daftar Kuesioner" />

      <div className="flex flex-col gap-10">
        <TableKuesioner />
      </div>
    </DefaultLayout>
  );
};

export default KuePage;
