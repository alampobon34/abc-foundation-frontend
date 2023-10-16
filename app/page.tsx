"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import { MISSIONS, DONATIONS } from "../data";
import MissionCard from "./components/MissionCard";
import AmountBox from "./components/AmountBox";
import Switch from "./components/switch/Switch";
import { useState } from "react";
import TabCard from "./components/TabCard";
import Button from "./components/Button";
import Link from "next/link";
export default function Home() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [tab, setTab] = useState(false);

  const handleToggleSwtich = () => {
    setToggleSwitch(!toggleSwitch);
  };

  const handleTab = () => {
    setTab(!tab);
  };
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
                  index === 1 ? "h-[326px] w-[361px]" : "h-[261px] w-[361px]"
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
    </main>
  );
}
