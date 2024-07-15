import React, { useState } from "react";
import { Button, Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";

import chevronRight from "../assets/icons/chevronRight.svg";

interface DataType {
  key: number;
  CustomerName: string;
}

const columns: TableColumnsType<DataType> = [
  {

    dataIndex: "CustomerName",
    render: (item) => (
      <p className="text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
        {item}
      </p>
    ),
  },


];

const tableData = [
  {
    key: 1,
    CustomerName: "Australia",
 
  },
  {
    key: 2,
    CustomerName: "Australia",
  
  },
  {
    key: 3,
    CustomerName: "Australia",
   
  },
  {
    key: 4,
    CustomerName: "Australia",
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

const TransactionTable: React.FC = () => {
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
    <div className="border-[0.5px] border-gray400 rounded-md  h-[70%] w-[30%]">
      <div className="flex items-center justify-between w-full h-full py-4 px-2">
        <p className="font-polysans font-normal text-[14px] leading-[18px] text-gray100">
          Recent Transaction
        </p>
        <div className="flex items-center ">
          <p className="font-polysans font-normal text-primary text-sm mr-2">
            View all
          </p>
          <img src={chevronRight} />
        </div>
      </div>
      {/* <Divider /> */}
      <Table
        showHeader={false}
        scroll={{ x: true }}
    
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TransactionTable;
