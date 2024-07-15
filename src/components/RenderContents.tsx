import React from "react";
import Dashboard from "../contents/Dashboard";
import { useAppSelector } from "../app/hook";

export default function RenderContents() {
  const tab = useAppSelector((state) => state.tabs.name);
  
  const showContents = (tab: any) => {
    switch (tab) {
      case "Dashboard":
        // code block
        return <Dashboard />;
        break;
      case tab === "":
        // code block
        return <h1>Thus is </h1>;
        break;

      default:
        return <h1>Thus is </h1>;
      // code block
    }
  };
  return <>{showContents(tab)}</>;
}
