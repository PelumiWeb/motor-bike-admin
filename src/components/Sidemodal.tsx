import React from "react";
import logo from "./logo.svg";
import Logout from "../assets/icons/sign-out.svg";
import { HomeIcon } from "./icons/HomeIcon";
import { BicycleIcon } from "./icons/BicycleIcon";

import { UserIcon } from "./icons/UserIcons";
import { EuroIcon } from "./icons/EuroIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { RentalIcon } from "./icons/RentalIcon";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setActive } from "../app/features/tabsSlice";
import { tabsName } from "../utils/TabsTypes";

export const tabs = [
  {
    id: 0,
    name: tabsName.dashboad,
    icon: HomeIcon,
  },
  {
    id: 1,
    name: tabsName.bikeManagement,
    icon: BicycleIcon,
  },
  {
    id: 2,
    name: tabsName.rentalManagement,
    icon: RentalIcon,
  },
  {
    id: 3,
    name: tabsName.userManagement,
    icon: UserIcon,
  },
  {
    id: 4,
    name: tabsName.payment,
    icon: EuroIcon,
  },
  {
    id: 5,
    name: tabsName.user,
    icon: SettingsIcon,
  },
];


function SideModal() {
  const dispatch  = useAppDispatch()
  const tab = useAppSelector((state) => state.tabs.name);

  // const [active, setActive] = React.useState("Dashboard");

  
  return (
    <div className="w-full border-r border-r-gray200 h-screen px-2">
      <h2 className="text-primary leading-[22px] mb-8 mt-2 text-[16px] font-semibold">
        Motobike
      </h2>
      <div className="flex-1 h-[80%]">
        <div>
          {tabs?.map(({ name, icon: Icon, id }) => (
            <div
              onClick={() => dispatch(setActive(name))}
              className={`${
                tab == name && "bg-[#FFEFD8]"
              }  flex  rounded-[30px] h-[44px] px-2 items-center  mb-2 cursor-pointer`}>
              <Icon color={tab === name ? "#F18E00" : "#8C8C8C"} />
              <p
                className={`${
                  tab == name ? "text-primary" : "text-gray300"
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
