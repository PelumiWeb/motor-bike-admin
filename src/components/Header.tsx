import React from "react";
import search from "../assets/icons/search.svg";
// import { useNavigate } from "react-router-dom";
import notification from "../assets/icons/notification.svg";
import avatar from "../assets/images/Avatars.png";

function Header() {
//   const navigate = useNavigate();
  const authentiated = true;

  return (
    <div className="flex items-center justify-between w-[100%] px-8 border-b-[0.5px] border-b-gray200 h-[10vh]">
      <div className="flex justify-between items-center py-8">
        <div className="flex items-center rounded-[26px] py-4 border border-solid border-1 border-gray400 px-8 h-[40px] ml-8 w-[250px] lg:w-[477px]">
          <img src={search} className="w-[16px] lg:w-[20px]" />
          <input
            className="text-primaryBlack border-none ml-2 text-sm leading-[20px] outline-none  w-full"
            placeholder="Search for users and bikes"
          />
        </div>
      </div>

      <div className="flex items-center  ml-5">
        <img
          src={notification}
          className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mr-4"
        />
        <div
          className="bg-[#FFECE5] w-[48px] h-[48px] rounded-[24px] grid place-items-center">
          <p className="text-black200 font-semibold text-[18px] leading-[26px]">OM</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
