import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableUser";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableUser from "@/components/Tables/TableUser";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const UserPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        <TableUser />
      </div>
    </DefaultLayout>
  );
};

export default UserPage;
