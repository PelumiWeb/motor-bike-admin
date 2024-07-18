import React from "react";
import ManagementTable from "../components/ManagementTable";
import { TableColumnsType } from "antd";

type Props = {};
 export interface DataType {
   key: number;
   BikeModel: string;
   pickupdate: string;
   DropOffDate: string;
   rentalfee: string;
   totalfee: string;
   status: string;
 }

export default function RentalManagement({}: Props) {
 

  const columns: TableColumnsType<DataType> = [
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Bike Model
        </p>
      ),
      dataIndex: "BikeModel",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Pick-up Date
        </p>
      ),
      dataIndex: "pickupdate",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Rental Fee
        </p>
      ),
      dataIndex: "rentalfee",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Toyal Fee
        </p>
      ),
      dataIndex: "totalfee",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Status
        </p>
      ),
      dataIndex: "status",
      render: (item) => (
        <div
          className={` w-full  lg:w-[80px] rounded-full ${
            item === "Active" ? "bg-statusOngoing" : "bg-[#FEDF89]"
          } bg-[#ABEFC6] px-[12px] py-[8px]  `}>
          <p
            className={`text-center ${
              item === "Active" ? "text-[#00730C]" : "text-[#B54708]"
            }
          text-[#00730C] text-[12px] lg:text-[14px] font-polysansSemibold`}>
            {item}
          </p>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "",
      render: (item) => (
        <div className="cursor-pointer ">
          <p className="text-primary font-polysans font-base text-sm ">
            View Details
          </p>
        </div>
      ),
    },
  ];

  const tableData = [
    {
      key: 1,
      BikeModel: "Yamaha X-Max 400",
      pickupdate: "20/05/2024",
      DropOffDate: "20/05/2024",
      rentalfee: "$20",
      totalfee: "$200",
      status: "Active",
    },
    {
      key: 2,
      BikeModel: "Yamaha X-Max 400",
      pickupdate: "20/05/2024",
      DropOffDate: "20/05/2024",
      rentalfee: "$20",
      totalfee: "$200",
      status: "Active",
    },
    {
      key: 3,
      BikeModel: "Yamaha X-Max 400",
      pickupdate: "20/05/2024",
      DropOffDate: "20/05/2024",
      rentalfee: "$20",
      totalfee: "$200",
      status: "Active",
    },
    {
      key: 4,
      BikeModel: "Yamaha X-Max 400",
      pickupdate: "20/05/2024",
      DropOffDate: "20/05/2024",
      rentalfee: "$20",
      totalfee: "$200",
      status: "Active",
    },
  ];
  const data: DataType[] = tableData;

  return (
    <div className="px-8 py-4 h-[90vh]">
      <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10">
        Payments
      </h1>

      <ManagementTable columns={columns} data={data} />
    </div>
  );
}
