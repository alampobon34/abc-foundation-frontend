import Image from "next/image";
import React from "react";
import Button from "./Button";

interface ProjectCardProp {
  title: string;
  desc: string;
  goal: number;
  raised: number;
  image: string;
}

interface ProjectCardProps {
  item: ProjectCardProp;
}
const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className="w-72 md:w-80 h-[530px] p-3 bg-white">
      <div className="w-full flex flex-col gap-4">
        <Image
          objectFit="cover"
          className="w-full h-64"
          src={item.image}
          height={200}
          width={200}
          alt=""
        />
        <h1 className="text-2xl text-title-color">{item.title}</h1>
        <p className="text-sm">{item.desc}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Goals: ${item.goal}</p>
          </div>
          <div>
            <p className="text-sm">Raised: ${item.raised}</p>
          </div>
        </div>
        <div className="w-full bg-[#E1EAF3]">
          <div
            style={{ width: `${(item.raised / item.goal) * 100}%` }}
            className="bg-[#FFC01F] py-1"
          ></div>
        </div>
        <div className="">
          <Button name="Donate Now" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
