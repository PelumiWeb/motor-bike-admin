import React, { useState } from "react";
import { Button, Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import filter from "../assets/icons/filter.svg";
import search from "../assets/icons/search.svg";

import chevronRight from "../assets/icons/chevronRight.svg";

interface DataType {
  key: number;
  CustomerName: string;
  BikeModel: string;
  pickupdate: string;
  DropOffDate: string;
  rentalfee: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: () => (
      <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
        Customer Name
      </p>
    ),
    dataIndex: "CustomerName",
    render: (item) => (
      <p className="text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
        {item}
      </p>
    ),
  },
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
        Activity status
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
];

const tableData = [
  {
    key: 1,
    CustomerName: "Australia",
    BikeModel: "Safari - IOS",
    pickupdate: "207.40.22.358",
    DropOffDate: "3 days ago",
    rentalfee: "3 days ago",
    status: "Active",
  },
  {
    key: 2,
    CustomerName: "Australia",
    BikeModel: "Safari - IOS",
    pickupdate: "207.40.22.358",
    DropOffDate: "3 days ago",
    rentalfee: "3 days ago",
    status: "Active",
  },
  {
    key: 3,
    CustomerName: "Australia",
    BikeModel: "Safari - IOS",
    pickupdate: "207.40.22.358",
    DropOffDate: "3 days ago",
    rentalfee: "3 days ago",
    status: "Active",
  },
  {
    key: 4,
    CustomerName: "Australia",
    BikeModel: "Safari - IOS",
    pickupdate: "207.40.22.358",
    DropOffDate: "3 days ago",
    rentalfee: "3 days ago",
    status: "Active",
  },
];
const data: DataType[] = tableData;

// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     location: "Australia",
//     email: 30,
//     ipaddress: "207.40.22.358",
//     time: "3 days ago",
//     activityStatus: "Active",
//   });
// }

const ManagementTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="flex flex-col ">
      <div className="pb-4 flex items-center self-end ">
        <div className="flex px-[16px] py-[4px] border border-gray500 w-[100px] rounded-[37px]">
          <img src={filter} />
          <p>Filter</p>
        </div>
        <div className="flex items-center rounded-[26px] border border-solid border-1 border-gray400 px-8 h-[40px] ml-8 w-[250px] lg:w-[477px]">
          <img src={search} className="w-[16px] lg:w-[20px]" />
          <input
            className="text-primaryBlack border-none ml-2 text-sm leading-[20px] outline-none  w-full"
            placeholder="Search for users and bikes"
          />
        </div>
      </div>
      <div className="border-[0.5px] border-gray400 rounded-md w-full">
        <Table
          showHeader
          scroll={{ x: true }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default ManagementTable;
