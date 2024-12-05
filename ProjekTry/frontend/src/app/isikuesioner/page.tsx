import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Questionnaire from "@/app/isikuesioner/isi";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const IsiKue = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Kuesioner" />

      <div className="flex flex-col gap-10">
        <Questionnaire />
      </div>
    </DefaultLayout>
  );
};

export default IsiKue;
