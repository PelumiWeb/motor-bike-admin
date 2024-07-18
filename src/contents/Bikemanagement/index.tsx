import React from "react";
import { BikeManagement } from "./BikeManagement";
import CustomButton from "../../components/CustomButton";
import Upload from "./Upload";

type Props = {};

function BikeManagerWrappper({}: Props) {
  const [addOpenUploadPage, setAddOpenUploadPage] = React.useState(false);

  return (
    <div className="px-8 py-4 h-[90vh]">
      <div className="w-full flex flex-1 justify-between items-center -mt-8">
        <h3>Bike Management</h3>
        <CustomButton
          onClick={() => setAddOpenUploadPage(true)}
          width="w-[250px]"
          name="Add Motocycle"
        />
      </div>
      {addOpenUploadPage ? <Upload /> : <BikeManagement />}
    </div>
  );
}

export default BikeManagerWrappper;
