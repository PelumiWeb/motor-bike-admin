import { Select } from "antd";
import React from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import upload from "../assets/icons/upload.svg";
import { Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

type InputData = {
  label: string;
  value?: string;
  placeholder: string;
  width?: string;
  ml?: boolean;
  select?: boolean;
  upload?: boolean;
  input?: boolean;
  type?: string;
  iconRight?: boolean;
};
function CustomInput(data: InputData) {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className={`w-full py-2 ${data?.ml && "ml-4"}`}>
      <p className="text-[14px] leading-[20px] font-medium text-primaryBlack mb-2 font-polysans">
        {data.label}
      </p>
      {data.select && (
        <Select
          className="w-full  outline-none  h-[56px] py-4"
          options={[{ value: "sample", label: <span>sample</span> }]}
        />
      )}

      {data?.input && (
        <Input
          className="border  w-full border-[#D0D5DD] outline-none rounded-lg h-[56px] p-[16px]"
          placeholder={data.placeholder}
          //   value={data.value}

          type={data?.type}
          suffix={data?.iconRight && <LockOutlined />}
        />
      )}
      {data?.upload && (
        <Dragger {...props}>
          <div className="h-[264px] flex flex-col items-center justify-around">
            <img src={upload} />
            <p className="font-semibold text-[14px] leading-[20px] text-primary font-polysansSemiBold">
              Click to upload{" "}
              <span className="font-medium text-[14px] leading-[20px] text-[#475367]">
                or drag and drop
              </span>
            </p>
            <p className="font-medium text-[12px] leading-[17px] text-[#98A2B3]font-polysans">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
            <div className="flex items-center justify-center w-full py-2">
              <span className="h-[2px] w-full bg-[#F0F2F5]" />
              <p className="font-semibold text-[12px] leading-[17px]text-[#98A2B3] px-2 font-polysansSemiBold">
                OR
              </p>
              <span className="h-[2px] w-full bg-[#F0F2F5]" />
            </div>

            <button className="rounded-full text-white bg-primary px-[22px] py-[8px]">
              Browse Files
            </button>
          </div>
        </Dragger>
      )}
    </div>
  );
}

export default CustomInput;
