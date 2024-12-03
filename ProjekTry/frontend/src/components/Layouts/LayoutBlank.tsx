"use client";
import React from "react";

export default function LayoutBlank({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page Wrapper */}
      <div className="flex">
        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
