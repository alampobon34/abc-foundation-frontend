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
    <div className="w-full h-full bg-white p-3">
      <div className="">
        <Image className="w-full" src={item.image} height={200} width={300} alt="" />
      </div>
      <div className="my-4">
        <div className="bg-[#E1EAF3] w-max px-2">
          <p className="text-primary-color">{item.publistDate}</p>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl text-title-color">{item.title}</h1>
      </div>
      <div className="">
        <p className="text-sm">{item.desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
