import React from 'react'
import CustomButton from '../../components/CustomButton';
import Frame1 from "../../assets/images/Frame1.png";
import Frame2 from "../../assets/images/Frame2.png";
import Frame3 from "../../assets/images/Frame3.png";
import RentalOption from "../../components/RentalOption";
import search from "../assets/icons/search.svg";
import userIcon from "../../assets/icons/user2.svg";
import location from "../../assets/icons/map-marker2.svg";
import settings from "../../assets/icons/settings.svg";

import { Select, Switch, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import SimpleMap from "../../components/Map";



type Props = {}

export const BikeManagement = (props: Props) => {
   const [open, setOpen] = React.useState(false);
  //  const navigate = useNavigate();

   const data = [
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame2,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame3,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
     {
       name: "Yamaha X-Max 400",
       location: "Gran Vía, 31, 28013 Madrid, Spain",
       noOfPassengeers: "2 Passengers",
       image: Frame1,
       price: "$20/day",
     },
   ];
  return (
    <div className="">
     
      {/* Content */}
      <div className="bg-white px-8 ">
        {/*  */}
        <div className="flex items-center justify-center sm:justify-between flex-wrap ">
          <div className="py- w-full">
            <p className="font-polysans text-sm leading-[17px] text-primaryBlack py-2 ">
              Location
            </p>
            <Select
              className="w-full lg:w-[150px] h-[50px] rounded-[7px] border-[0.5px] border-solid border-[#676A6C]"
              placeholder="Select City"
              options={[
                {
                  value: "sample",
                  label: (
                    <div>
                      <p className="font-polysans">Sample</p>
                    </div>
                  ),
                },
                { value: "sample", label: "sample" },
              ]}
            />
          </div>
          <div className="py-4">
            <p className="font-polysans text-sm leading-[17px] text-primaryBlack py-2 ">
              Selected Dates
            </p>
            <DatePicker
              className="w-[300px] h-[50px] rounded-[7px] border-[1px] border-solid border-[#676A6C]"
              // onChange={onChange}
            />
          </div>
          <div className="py-4">
            <p className="font-polysans text-sm leading-[17px] text-primaryBlack py-2 ">
              Type
            </p>
            <Select
              className="w-[90px] h-[50px] rounded-[7px] border-[0.5px] border-solid border-[#676A6C]"
              placeholder="Select City"
              options={[
                {
                  value: "sample",
                  label: (
                    <div>
                      <p className="font-polysans">Sample</p>
                    </div>
                  ),
                },
                { value: "sample", label: "sample" },
              ]}
            />
          </div>
          <div className="py-4">
            <p className="font-polysans text-sm leading-[17px] text-primaryBlack py-2 ">
              Brand
            </p>
            <Select
              className="w-[90px] h-[50px] rounded-[7px] border-[0.5px] border-solid border-[#676A6C]"
              placeholder="Select City"
              options={[
                {
                  value: "sample",
                  label: (
                    <div>
                      <p className="font-polysans">Sample</p>
                    </div>
                  ),
                },
                { value: "sample", label: "sample" },
              ]}
            />
          </div>
          <div className="py-4">
            <p className="text-sm leading-[17px] text-primaryBlack py-2 font-polysans">
              Price Range
            </p>
            <Select
              className="w-[150px] h-[50px] rounded-[7px] border-[0.5px] border-solid border-[#676A6C]"
              placeholder="Select City"
              options={[
                {
                  value: "sample",
                  label: (
                    <div>
                      <p className="font-polysans"> Sample</p>
                    </div>
                  ),
                },
                { value: "sample", label: "sample" },
              ]}
            />
          </div>
          <div className="mt-8">
            {/* <p className="text-sm leading-[17px] text-primaryBlack py-2 ">
            Price Range
          </p> */}
            <div className="w-[160px] h-[48px] flex items-center border-[0.5px] border-solid rounded-[7px] bg-white px-4 border-[#676A6C] cursor-pointer">
              <img src={settings} />
              <p className="text-primaryBlack text-sm leading-[24px] ml-2 font-polysans">
                More Filter
              </p>
            </div>
          </div>
          <div className="mt-8 flex item-center">
            <Switch defaultChecked onChange={() => setOpen((prev) => !prev)} />
            <p className="text-primaryBlack text-md leading-[24px] ml-2 font-polysans">
              Show Map
            </p>
          </div>
        </div>
        <div className="flex  justify-around w-full">
          <div className="flex items-center justify-center w-full flex-wrap mb-20">
            {data?.map((data: any) => (
              <div className="m-4 cursor-pointer">
                <img src={data.image} className="w-[304px] h-[310px] my-2" />
                <div className="py-2">
                  <p className="text-blackPrimary text-lg font-polysans">
                    {data.name}
                  </p>
                  <div className="flex items-center">
                    <img src={location} />
                    <p className="text-md font-thin text-blackPrimary ml-2 font-polysans">
                      {" "}
                      {data.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={userIcon} />
                    <p className="text-md font-thin text-blackPrimary ml-2 font-polysans">
                      {data.noOfPassengeers}
                    </p>
                  </div>
                  <p className="text-blackPrimary py-1 font-polysans">
                    {data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {open && <SimpleMap />}
        </div>
      </div>
    </div>
  );
}