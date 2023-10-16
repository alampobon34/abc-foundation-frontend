import Image from "next/image";
import React from "react";

interface MissionCardProp {
  title: string;
  desc: string;
  image: string;
}

interface MissionCardProps {
  item: MissionCardProp;
  styles?: string;
}

const MissionCard = ({ item, styles }: MissionCardProps) => {
  return (
    <div className={`bg-white border rounded shadow-sm p-4 w-72 md:w-80 flex flex-col justify-center items-center gap-4 ${styles}`}>
      <Image className="" src={item.image} height={120} width={120} alt="" />
      <h1 className="text-2xl font-bold text-title-color">{item.title}</h1>
      <p className="text-center">{item.desc}</p>
    </div>
  );
};

export default MissionCard;
