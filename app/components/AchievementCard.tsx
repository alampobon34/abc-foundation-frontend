import React from "react";

interface AchievementCardProps {
  name: string;
  value: number;
  percentage?: number;
}

const AchievementCard = ({ name, value }: AchievementCardProps) => {
  return (
    <div className="w-40 h-28 ">
      <div className="bg-[#E1EAF3] h-16 w-20 flex items-center relative">
        <div className="absolute top-4 left-6 flex flex-col items-start">
          <h1 className="text-4xl text-primary-color">${value}</h1>
          <p className="w-1/2 mt-3 text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
