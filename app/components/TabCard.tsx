import Image from "next/image";
import React, { useState } from "react";

interface TabCardProps {
  title: string;
  subtitle: string;
  image: string;
  handleTab: () => void;
  tab: boolean;
}
const TabCard = ({ title, subtitle, image, handleTab, tab }: TabCardProps) => {
  return (
    <div
      onClick={handleTab}
      className="bg-black bg-opacity-25 flex items-center p-1 gap-2 cursor-pointer hover:bg-white hover:bg-opacity-10"
    >
      <div className="flex justify-center items-center w-10 h-10 bg-white bg-opacity-50">
        <Image src={image} height={24} width={24} alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-0">
        <p style={{ fontSize: "12px" }} className="text-sm">
          {title}
        </p>
        <p style={{ fontSize: "10px" }} className="text-sm">
          {subtitle}
        </p>
      </div>

      {tab && (
        <div>
          <Image
            src="/donation/arrow-right.svg"
            height={24}
            width={24}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default TabCard;
