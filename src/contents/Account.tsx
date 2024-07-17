import React from 'react'

type Props = {}

export default function Account({}: Props) {
  const tabs  = ["Profile", "Security"]
  const [active, setActive] = React.useState("Profile")
  return (
    <div className="px-8 py-4 h-[90vh]">
      <h1 className="font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10">
        Account Settings
      </h1>{" "}

      <div>
        
         </div>

    </div>
  );
}