import React from "react";
import Dashboard from "../contents/Dashboard";
import { useAppSelector } from "../app/hook";
import { tabsName } from "../utils/TabsTypes";
import { BikeManagement } from "../contents/BikeManagement";
import RentalManagement from "../contents/RentalManagement";
import UserManagement from "../contents/UserManagement";
import Payments from "../contents/Payments";
import Account from "../contents/Account";

export default function RenderContents() {
  const tab = useAppSelector((state) => state.tabs.name);
  
  const showContents = (tab: any) => {
    switch (tab) {
      case tabsName.dashboad:
        // code block
        return <Dashboard />;
        break;
      case tabsName.bikeManagement:
        // code block
        return <BikeManagement />;
        break;
      case tabsName.rentalManagement:
        // code block
        return <RentalManagement />;
        break;

      case tabsName.userManagement:
        // code block
        return <UserManagement />;
        break;
      case tabsName.payment:
        // code block
        return <Payments />;
        break;

      default:
        return <Account />
      // code block
    }
  };
  return <>{showContents(tab)}</>;
}
