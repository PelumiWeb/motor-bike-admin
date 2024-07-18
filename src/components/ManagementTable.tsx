import React, { useState } from "react";
import { Button, Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import filter from "../assets/icons/filter.svg";
import search from "../assets/icons/search.svg";

import chevronRight from "../assets/icons/chevronRight.svg";

interface DataType {
  key: number;
  BikeModel: string;
  pickupdate: string;
  DropOffDate: string;
  rentalfee: string;
  totalfee: string;
  status: string;
}

const ManagementTable = ({
  columns,
  data,
}: {
  columns: any;
  data: any;
}) => {
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
