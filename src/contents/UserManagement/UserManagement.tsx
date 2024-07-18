import React from "react";
import ManagementTable from "../../components/ManagementTable";
import ManagementDetails from "./ManagementDetails";
import bin from "../../assets/icons/bin.svg";
import lock from "../../assets/icons/lock.svg";
import { TableColumnsType } from "antd";


type Props = {};

 export interface DataType {
   key: number;
   userId: string;
   name: string;
   email: string;
   phone: string;
   status: string;
 }
export default function RentalManagement({}: Props) {

  const [details, setDetails] = React.useState(false)

  const columns: TableColumnsType<DataType> = [
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          User Id
        </p>
      ),
      dataIndex: "userId",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Name
        </p>
      ),
      dataIndex: "name",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Email
        </p>
      ),
      dataIndex: "email",
      render: (item) => (
        <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
          {item}
        </p>
      ),
    },
    {
      title: () => (
        <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
          Phone Number
        </p>
      ),
      dataIndex: "phone",
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
        <div className="cursor-pointer " onClick={() => setDetails((prev) => !prev)
        }>
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
      userId: "1000AD9899G0",
      name: "John Philip",
      email: "myemail@gmail.com",
      phone: "8492-0499-09389",
      status: "Active",
    },
    {
      key: 2,
      userId: "1000AD9899G0",
      name: "John Philip",
      email: "myemail@gmail.com",
      phone: "8492-0499-09389",
      status: "Active",
    },
    {
      key: 3,
      userId: "1000AD9899G0",
      name: "John Philip",
      email: "myemail@gmail.com",
      phone: "8492-0499-09389",
      status: "Active",
    },
    {
      key: 4,
      userId: "1000AD9899G0",
      name: "John Philip",
      email: "myemail@gmail.com",
      phone: "8492-0499-09389",
      status: "Active",
    },
  ];
  const data: DataType[] = tableData;


  return (
    <div className="">
      <div className="flex items-center w-full justify-between mb-10">
        <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack ">
          User Management
        </h1>
        {details && <div className="flex items-center ">
          <div className="flex items-center w-[130px] cursor-pointer ">
            <img src={lock} className="w-[24px] h-[24px]" />
            <p className="text-red200 ml-1">Block User</p>
          </div>
          <div className="flex items-center w-[130px] cursor-pointer">
            <img src={bin} className="w-[24px] h-[24px]" />
            <p className="text-red200 ml-1">Delete</p>
          </div>
        </div>}
      </div>

     {details && <ManagementDetails />}
      <ManagementTable columns={columns} data={data} />
    </div>
  );
}
