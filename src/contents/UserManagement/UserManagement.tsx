import React from "react";
import ManagementTable from "../../components/ManagementTable";
import ManagementDetails from "./ManagementDetails";
import bin from "../../assets/icons/bin.svg";
import lock from "../../assets/icons/lock.svg";


type Props = {};

export default function RentalManagement({}: Props) {
  return (
    <div className="px-8 py-4 h-[90vh]">
      <div className="flex items-center w-full justify-between mb-10">
        <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack ">
          User Management
        </h1>
        <div className="flex items-center ">
          <div className="flex items-center w-[130px] cursor-pointer ">
            <img src={lock} className="w-[24px] h-[24px]" />
            <p className="text-red200 ml-1">Block User</p>
          </div>
          <div className="flex items-center w-[130px] cursor-pointer">
            <img src={bin} className="w-[24px] h-[24px]" />
            <p className="text-red200 ml-1">Delete</p>
          </div>
        </div>
      </div>

      <ManagementDetails />
      <ManagementTable />
    </div>
  );
}
