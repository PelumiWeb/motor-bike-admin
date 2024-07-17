import React from "react";
import Avatar from "../../assets/icons/Avatars.svg";
import Frame from "../../assets/images/Frame1.png";
import ArroRight from "../../assets/icons/arrow-right.svg"
import CustomButton from "../../components/CustomButton";

type Props = {};

function ManagementDetails({}: Props) {
  return (
    <div className="w-full lg:w-[300px] py-4">
        <img src={Avatar}/>
      <div className="w-full">
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            First Name
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            John
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Last Name
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            Doe
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Email
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            myemail@gmail.com
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Mobile Number:
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            8492-0499-09389
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-polysans font-base text-sm text-gray100">
            Valid ID Type
          </p>
          <p className="font-polysans font-medium text-base text-black300">
            Driver's License
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default ManagementDetails;
