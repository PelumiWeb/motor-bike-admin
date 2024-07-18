import { Breadcrumb } from "antd";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { LockOutlined, DollarOutlined } from "@ant-design/icons";
import dollar from "../../assets/icons/dollar.svg"
import CustomButton from "../../components/CustomButton";

type Props = {};

function Upload({}: Props) {
  return (
    <div className="w-[650px]">
      <div></div>
      <h3>Upload Motorcycle</h3>
      <CustomInput label="Motorcycle model" placeholder="motocycle" input />
      <CustomInput label="Year Released" placeholder="year releases" input />
      <CustomInput label="Location" placeholder="location" input />
      <CustomInput
        label="No of Passenders"
        placeholder="No of passengers"
        input
      />
      <CustomInput
        label="Pricing (per day)"
        placeholder="No of passengers"
        input
        iconLeft={<img src={dollar} />}
        width="w-[260px]"
      />
      <CustomInput
        label="Description"
        placeholder="Enter a brief description about the motorcycle"
        textArea
      />
      <div className="flex items-center justify-between">
        <CustomButton name="Next" width="w-[250px]" />
        <CustomButton
          borderColor="border border-primary"
          name="Cancel"
          bg="bg-white"
          textColor="text-primary"
          width="w-[250px]"
        />
        <p className="text-primaryBlack font-polysans font-semibold text-lg">
          Save for Later
        </p>
      </div>
    </div>
  );
}

export default Upload;
