import React from 'react'
import ManagementTable from '../../components/ManagementTable';
import ManagementDetails from './ManagementDetails';
import { TableColumnsType } from 'antd';

type Props = {}

 export interface DataType {
   key: number;
   name: string;
   bikemodel: string;
   pickUpDate: string;
   dropOffDate: string;
   rentalFee: string;
   status: string;
 }
export default function RentalManagement({}: Props) {
  const [details, setDetails] = React.useState(false);

   const columns: TableColumnsType<DataType> = [
     {
       title: () => (
         <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
           Customer Name
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
           bike Model
         </p>
       ),
       dataIndex: "bikemodel",
       render: (item) => (
         <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
           {item}
         </p>
       ),
     },
     {
       title: () => (
         <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
           Pickup Date
         </p>
       ),
       dataIndex: "pickUpDate",
       render: (item) => (
         <p className=" text-[12px] lg:text-[16px] leading=[10px] leading-[20px] font-polysans text-black100">
           {item}
         </p>
       ),
     },
     {
       title: () => (
         <p className="text-[#545454] font-polysans font-semibold text-[12px] leading-[15px]  ">
           Drop Off Date
         </p>
       ),
       dataIndex: "dropOffDate",
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
       dataIndex: "rentalFee",
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
         <div
           className="cursor-pointer "
           onClick={() => setDetails((prev) => !prev)}>
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
         name: "1000AD9899G0",
         bikemodel: "John Philip",
         pickUpDate: "myemail@gmail.com",
         dropOffDate: "8492-0499-09389",
         rentalFee: "8492-0499-09389",
         status: "Active",
       },
       {
         key: 2,
         name: "1000AD9899G0",
         bikemodel: "John Philip",
         pickUpDate: "myemail@gmail.com",
         dropOffDate: "8492-0499-09389",
         rentalFee: "8492-0499-09389",
         status: "Active",
       },
       {
         key: 3,
         name: "1000AD9899G0",
         bikemodel: "John Philip",
         pickUpDate: "myemail@gmail.com",
         dropOffDate: "8492-0499-09389",
         rentalFee: "8492-0499-09389",
         status: "Active",
       },
       {
         key: 4,
         name: "1000AD9899G0",
         bikemodel: "John Philip",
         pickUpDate: "myemail@gmail.com",
         dropOffDate: "8492-0499-09389",
         rentalFee: "8492-0499-09389",
         status: "Active",
       },
     ];
     const data: DataType[] = tableData;

  return <div className="px-8 py-4 h-[90vh]">
    <h1 className='font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10'>Rental Management</h1>

    
   {!details && <ManagementTable columns={columns} data={data} />}
   {details && <ManagementDetails />}

    </div>;
}