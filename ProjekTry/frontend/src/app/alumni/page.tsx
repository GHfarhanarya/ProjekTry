import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AlumniTable from "@/app/alumni/TableAlumni";
import axios from "axios";
import { Alumni } from "@prisma/client";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const fethingUser = async()=>{
  const res = await axios.get("http://localhost:3000/api/alumnis");
  return res.data.data;
}

const AlumniPage =async () => {
  const data:Alumni[] = await fethingUser() || [];
  return (
    <DefaultLayout>
      <AlumniTable alumni={data} />
    </DefaultLayout>
  );
};

export default AlumniPage;
