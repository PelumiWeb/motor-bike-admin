import React from "react";
import logo from "./logo.svg";
import Logout from "../assets/icons/sign-out.svg";
import { HomeIcon } from "./icons/HomeIcon";
import { BicycleIcon } from "./icons/BicycleIcon";

import { UserIcon } from "./icons/UserIcons";
import { EuroIcon } from "./icons/EuroIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { RentalIcon } from "./icons/RentalIcon";

export const tabs = [
  {
    id: 0,
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Bicycle",
    icon: BicycleIcon,
  },
  {
    id: 2,
    name: "Rental Management",
    icon: RentalIcon,
  },
  {
    id: 3,
    name: "User Management",
    icon: UserIcon,
  },
  {
    id: 4,
    name: "Payment",
    icon: EuroIcon,
  },
  {
    id: 5,
    name: "Accounts",
    icon: SettingsIcon,
  },
];


function SideModal() {
  const [active, setActive] = React.useState("Dashboard");

  
  return (
    <div className="w-full border-r border-r-gray200 h-screen px-2">
      <h2 className="text-primary leading-[22px] mb-8 mt-2 text-[16px] font-semibold">
        Motobike
      </h2>
      <div className="flex-1 h-[80%]">
        <div>
          {tabs?.map(({ name, icon: Icon, id }) => (
            <div
              onClick={() => setActive(name)}
              className={`${
                active == name && "bg-[#FFEFD8]"
              }  flex  rounded-[30px] h-[44px] px-2 items-center  mb-2 cursor-pointer`}>
              <Icon color={active === name ? "#F18E00" : "#8C8C8C"} />
              <p
                className={`${
                  active == name ? "text-primary" : "text-gray300"
                }  ml-2`}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex  h-[44px] px-2 items-center  mb-2 cursor-pointer`}>
        <img src={Logout} />
        <p className={`ml-2 text-gray300`}>Logout</p>
      </div>
    </div>
  );
}

export default SideModal;
