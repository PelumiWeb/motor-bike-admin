import React from "react";
import Avatar from "../../assets/icons/Avatars.svg";
import Frame from "../../assets/images/Frame1.png";
import ArroRight from "../../assets/icons/arrow-right.svg"
import CustomButton from "../../components/CustomButton";

type Props = {};

function ManagementDetails({}: Props) {
  return (
    <div className="w-[300px]">
      <div className="flex items-center">
        <img src={Avatar} className="w-[32px] h-[32px]" />
        <p className="ml-2">John Doe</p>
      </div>
      <div className="py-4">
        <img src={Frame} className="w-[189px] h-[128px] rounded-[10px]" />
        <p className="font-polysans font-semibold text-base text-primaryBlack">
          Yamaha X-Max 400
        </p>
        <p className="text-md font-thin text-blackPrimary font-polysans">
          Gran Vía, 31, 28013 Madrid, Spain
        </p>

        <div className="flex items-center cursor-pointer mt-6">
          <p className="font-polysans font-semibold text-sm text-primary mr-2">
            View more bank info
          </p>
          <img src={ArroRight} />
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Pick-up Date
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            20/05/2024
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Pick-up Time
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            12: 00PM
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Drop-off Date
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            30/05/2024
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Rental fee ($/day)
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            $20
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Total Rent Fee
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            $500
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray400">Status</p>
          <CustomButton
            name="Completed"
            // disabled
            width="w-[120px]"
            py="py-1"
            textColor="text-black400"
            bg={"bg-statusCompleted"}
          />
        </div>
      </div>
    </div>
  );
}

export default ManagementDetails;
