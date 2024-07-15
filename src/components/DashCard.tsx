import React from 'react'
import Trendup from "../assets/icons/TrendUp.svg";
import chevronRight from "../assets/icons/chevronRight.svg"

function DashCard() {
    
    
  return (
    <div className="border-[0.5px] border-gray400 p-4 w-[280px] h-[150px] rounded-[10px] m-2 cursor-pointer">
      <h3 className="font-medium text-sm font-polysans text-gray100">
        Total Rentals
      </h3>
      <div className="flex items-center justify-start">
        <h1 className="font-medium text-[40px] mr-2">50</h1>
        <div className="flex ">
          <img src={Trendup} className="w-[20px] h-[20px] mr-2" />
          <p className="font-normal font-polysans text-sm text-gray300">
            {" "}
            <span className="font-medium text-[#2DA639]">20%</span> since last
            week
          </p>
        </div>
      </div>
      <div className='flex items-center '>
        <p className="font-polysans font-normal text-primary text-sm mr-2">
          View Rentals
        </p>
        <img src={chevronRight} />
      </div>
    </div>
  );
}

export default DashCard