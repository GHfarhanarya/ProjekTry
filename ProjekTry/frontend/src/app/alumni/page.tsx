import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AlumniTable from "@/app/alumni/TableAlumni";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const AlumniPage = () => {
  return (
    <DefaultLayout>
      <AlumniTable />
    </DefaultLayout>
  );
};

export default AlumniPage;
