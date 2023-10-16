"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import { MISSIONS } from "../data";
import MissionCard from "./components/MissionCard";
import AmountBox from "./components/AmountBox";
import Switch from "./components/switch/Switch";
import { useState } from "react";
export default function Home() {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleToggleSwtich = () => {
    setToggleSwitch(!toggleSwitch);
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
                styles={index === 1 ? "h-96" : "h-80"}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section >
        <div className="container border bg-white flex py-10">
          <div className="w-full md:w-1/4">
            <div className="bg-primary-color p-4 text-white h-full">
              <h1>We Need</h1>
              <h1>Your Help</h1>
              <p>Your little participation can add biggest impact on society.</p>
            </div>
          </div>
          <div className="w-full md:w-3/4 px-10">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-color font-Romana">Select Amount to Donate</h1>
              <div className="">
                <Switch value={toggleSwitch}/>
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
          </div>
        </div>
      </section>
    </main>
  );
}
