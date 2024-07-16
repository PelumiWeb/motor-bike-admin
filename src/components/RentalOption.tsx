import React from "react";

import userIcon from "../assets/icons/user.svg";
import location from "../assets/icons/map-marker.svg";
function RentalOption({ data }: { data: any }) {
  return (
    <div>
      <img src={data.image} className="w-[420px] h-[380px]" />
      <div className="py-2">
        <p className="text-white text-lg font-polysansBold">{data.name}</p>
        <div className="flex items-center">
          <img src={location} />
          <p className="text-md font-thin text-white ml-2 font-polysansLight">
            {" "}
            {data.location}
          </p>
        </div>
        <div className="flex items-center">
          <img src={userIcon} />
          <p className="text-md font-thin text-white ml-2 font-polysansLight">
            {data.noOfPassengeers}
          </p>
        </div>
        <p className="text-white py-1 font-polysans">{data.price}</p>
      </div>
    </div>
  );
}

export default RentalOption;
