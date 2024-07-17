import React from "react";
import Profile from "./Profile";
import Security from "./Security";

type Props = {};

export default function Account({}: Props) {
  const tabs = ["Profile", "Security"];
  const [active, setActive] = React.useState("Profile");
  return (
    <div className="px-8 py-4 h-[90vh]">
      <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10">
        Account Settings
      </h1>{" "}
      <div className="flex flex-1 border-b border-b-gray200 w-full ">
        {tabs.map((data) => (
          <div className="cursor-pointer" onClick={() => setActive(data)}>
            <p
              className={`${
                active === data ? "text-primary" : "text-gray600"
              } ${
                active == data && "border-b border-b-primary"
              } font-base text-base font-polysans mr-4`}>
              {data}
            </p>
          </div>
        ))}
      </div>
      <div className="w-1/2">{active === "Profile" ? <Profile /> : <Security/>}</div>
    </div>
  );
}
