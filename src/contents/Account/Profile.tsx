import React from "react";
import Avatar from "../../assets/images/Avatars.png";
import CustomInput from "../../components/CustomInput";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="pt-4">
      <img src={Avatar} />

      <CustomInput label="Name" input placeholder="John Doe Regen" />
      <CustomInput
        label="Email Address"
        input
        placeholder="Myemail@gmail.com"
      />
      <CustomInput label="Staff ID" input placeholder="234AD90" />
    </div>
  );
}
