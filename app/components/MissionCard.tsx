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
  aos?: string,
}

const MissionCard = ({ item, styles, aos }: MissionCardProps) => {
  return (
    <div data-aos={aos}
      className={`bg-white shadow-lg p-4 flex flex-col justify-center items-center gap-4 ${styles}`}
    >
      <Image className="" src={item.image} height={50} width={50} alt="" />
      <h1 className="text-2xl font-bold text-title-color">{item.title}</h1>
      <p className="text-center">{item.desc}</p>
    </div>
  );
};

export default MissionCard;
