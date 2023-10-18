import Image from "next/image";
import React from "react";

interface NewsCardProps {
  title: string;
  publistDate: string;
  desc: string;
  image: string;
}

interface Props {
  item: NewsCardProps;
}

const NewsCard = ({ item }: Props) => {
  return (
    <div className="w-80 h-[460px] bg-white p-3">
      <div className="h-1/2">
        <Image src={item.image} height={200} width={300} alt="" />
      </div>
      <div className="my-4">
        <div className="bg-[#E1EAF3] w-max px-2">
          <p className="text-primary-color">{item.publistDate}</p>
        </div>
      </div>
      <div className="h-1/6">
        <h1 className="text-2xl text-title-color">{item.title}</h1>
      </div>
      <div className="h-1/5">
        <p className="text-sm">{item.desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
