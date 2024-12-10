import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/app/user/TableUser";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableUser from "@/app/user/TableUser";
import axios from "axios";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const fethingUser = async()=>{
  const res = await axios.get("http://localhost:3000/api/users");
  return res.data;
}


const UserPage =async () => {
  const user = await fethingUser();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        <TableUser user={user.data}/>
      </div>
    </DefaultLayout>
  );
};

export  default  UserPage;
