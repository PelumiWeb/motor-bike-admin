import React from "react";
import ManagementTable from "../components/ManagementTable";

type Props = {};

export default function RentalManagement({}: Props) {
  return (
    <div className="px-8 py-4 h-[90vh]">
      <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10">
        Payments
      </h1>

      <ManagementTable/>
    </div>
  );
}
