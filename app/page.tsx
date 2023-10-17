"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import { MISSIONS, DONATIONS, ACHIEVEMENT, PROJECTS, PRESS } from "../data";
import MissionCard from "./components/MissionCard";
import AmountBox from "./components/AmountBox";
import Switch from "./components/switch/Switch";
import { useState } from "react";
import TabCard from "./components/TabCard";
import Button from "./components/Button";
import Link from "next/link";
import AchievementCard from "./components/AchievementCard";
import ProjectCard from "./components/ProjectCard";
export default function Home() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [tab, setTab] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const handleToggleSwtich = () => {
    setToggleSwitch(!toggleSwitch);
  };

  const handleTab = (e: any) => {
    // setTab(!tab);
    console.log(e);
  };

  const handlBtnClick = (index: any) => {
    setActiveButton(index);
  }
  return (
    <main className="">
      <Hero />
      <section className="">
        <div className="container py-12">
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <Title name="Our Mission" />
            <Subtitle name="Provide support to underprivileged section of the society specially extreme poor/homeless and orphan children through quality education, nourishment & sheter to make them resources for the nation." />
          </div>
          <div className="flex justify-around py-10">
            {MISSIONS.map((item, index) => (
              <MissionCard
                item={item}
                styles={
                  index === 1 ? "h-[300px] w-[320px]" : "h-[250px] w-[300px]"
                }
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container border bg-white flex py-10">
          <div className="w-full md:w-1/4">
            <div className="bg-primary-color p-4 text-white h-full flex flex-col justify-center gap-2">
              <div>
                <h1 className="text-xl">We Need</h1>
                <h1 className="text-3xl ">Your Help</h1>
              </div>
              <p className="text-sm text-white opacity-60">
                Your little participation can add biggest impact on society.
              </p>
              <div className="flex flex-col gap-3">
                {DONATIONS.map((item, index) => (
                  <TabCard
                    tab={tab}
                    handleTab={handleTab}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 px-10">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-color font-Romana">
                Select Amount to Donate
              </h1>
              <div className="">
                <Switch value={toggleSwitch} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <AmountBox />
              <AmountBox />
              <AmountBox />
              <AmountBox />
              <AmountBox />
              <AmountBox />
              <AmountBox />
              <AmountBox />
            </div>
            <p className="text-primary-color py-3 text-sm">
              I want to add custom amount
            </p>
            <div className="flex items-center gap-2 py-3">
              <Button name="Donate Now" />
              <div className="flex items-center gap-1">
                <Link className="flex items-center gap-1" href="#">
                  <Image
                    src="/donation/play-circle.svg"
                    height={24}
                    width={24}
                    alt=""
                  />
                  <p className="text-sm text-primary-color">See Videos</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-10 flex justify-center items-center">
          <div className="flex flex-col gap-8 w-full md:w-1/2 ">
            <div>
              <p>OUR ACHIEVEMENTS</p>
              <h1 className="text-4xl text-title-color">
                Your Participation <br /> Make this possible
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {ACHIEVEMENT.map((item, index) => (
                <AchievementCard
                  name={item.name}
                  value={item.value}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              className="w-full h-full"
              src="/achievement/achievement.jpg"
              height={300}
              width={300}
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Title name="Latest Projects" />
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex justify-center items-center border border-primary-color">
                <Image src="/icons/left.svg" height={12} width={6} alt="" />
              </div>
              <div className="h-10 w-10 border flex justify-center items-center border-primary-color">
                <Image src="/icons/right.svg" height={12} width={6} alt="" />
              </div>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((item, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col items-center md:flex-row gap-x-8 py-10">
          <div className="w-1/4 flex items-end justify-end mt-6">
            <Image src="/man.png" width={212} height={437} alt="" />
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <p className="text-md">JOIN NOW</p>
            <Title name="Register for volunteer program" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit <br />
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt <br />
              nostrud amet.
            </p>

            <div>
              <Button name="Donate Now" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-96 bg-contain bg-center -mt-20 flex justify-center"
        style={{ backgroundImage: `url(${"/blue-bg.jpg"})` }}
      >
        <div className="container flex flex-col justify-center items-center md:flex-row gap-x-8">
          <div className="w-full md:w-1/2 flex justify-center items-end ">
            <Image src="/people.png" width={300} height={300} alt="" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <Image src="/icons/comma.svg" width={60} height={60} alt="" />
            <p className="text-white text-md">
              I feel proud to be a part of ABC Foundation
            </p>
            <div className="flex flex-col gap-0 text-white text-md">
              <p>Al Hossain Emam</p>
              <span className="text-sm">
                Student, Daffodil International University
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-10">
          <div className="flex justify-between items-center">
            <Title name="Press" />
            <div className="flex gap-2">
              {PRESS.map((item, index) => (
                <Button
                  handleClick={() => handlBtnClick(index)}
                  key={index}
                  name={item.name}
                  outline={true}
                  isActive={index===activeButton ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
