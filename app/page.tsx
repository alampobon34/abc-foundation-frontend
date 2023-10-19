"use client";
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import {
  MISSIONS,
  DONATIONS,
  ACHIEVEMENT,
  PROJECTS,
  PRESS,
  NEWS,
} from "../data";
import MissionCard from "./components/MissionCard";
import AmountBox from "./components/AmountBox";
import Switch from "./components/switch/Switch";
import { useState } from "react";
import TabCard from "./components/TabCard";
import Button from "./components/Button";
import Link from "next/link";
import AchievementCard from "./components/AchievementCard";
import ProjectCard from "./components/ProjectCard";
import NewsCard from "./components/NewsCard";
export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 3000,
         once: false,
       })
 }, [])

  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [tab, setTab] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const handleToggleSwtich = () => {
    setToggleSwitch(!toggleSwitch);
  };

  const handleTab = (index: any) => {
    setTab(index);
  };

  const handlBtnClick = (index: any) => {
    setActiveButton(index);
  };
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <section className="">
        <div className="container py-12">
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <Title name="Our Mission" />
            <Subtitle name="Provide support to underprivileged section of the society specially extreme poor/homeless and orphan children through quality education, nourishment & sheter to make them resources for the nation." />
          </div>
          <div className="grid grid-cols-1 gap-5 place-items-center md:flex md:justify-around py-10">
            {MISSIONS.map((item, index) => (
              <MissionCard
                item={item}
                styles={
                  index === 1 ? "h-[300px] w-[320px]" : "h-[250px] w-[300px]"
                }
                key={index}
                aos={index ===1 ? "flip-up" : "zoom-in"}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container border bg-white flex flex-col md:flex-row md:py-10">
          <div className="w-full md:w-1/4 ">
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
                    isActive={index === tab ? true : false}
                    handleTab={() => handleTab(index)}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    key={index}
                    aos="zoom-in-down"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="xxsm:py-2 xsm:py-4 md:py-0 w-full md:w-3/4 px-10 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h1 className="text-2xl font-bold text-primary-color font-Romana">
                Select Amount to Donate
              </h1>
              <div className="text-end">
                <Switch value={toggleSwitch} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="container py-10 flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col gap-8 w-full md:w-1/2 ">
            <div>
              <p className="text-lg">OUR ACHIEVEMENTS</p>
              <h1 className="text-4xl text-title-color">
                Your Participation <br /> Make this possible
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              {ACHIEVEMENT.map((item, index) => (
                <AchievementCard
                  name={item.name}
                  value={item.value}
                  key={index}
                  aos="zoom-out"
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
          {/* styles={index === 1 ? 'mx-auto' : index===0 ? 'place-items-start' : 'ml-auto'} */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-14 md:mx-auto gap-y-4 place-items-center">
            {PROJECTS.map((item, index) => (
              <ProjectCard item={item}  key={index} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col-reverse items-center md:flex-row gap-x-8 py-10">
          <div className="w-full md:w-1/4 flex items-end justify-end mt-6">
            <Image className="w-full h-full object-cover" src="/man.png" width={212} height={437} alt="" />
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
        className="h-[500px] md:h-auto md:py-10 bg-contain bg-center -mt-20 flex justify-center"
        style={{ backgroundImage: `url(${"/blue-bg.jpg"})` }}
      >
        <div className="container flex flex-col justify-center items-center md:flex-row gap-x-8">
          <div className="xxsm:mt-20 xsm:mt-20 md:mt-0 w-full md:w-1/2 flex justify-center items-end ">
            <Image data-aos="fade-right" src="/people.png" width={300} height={300} alt="" />
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/2 flex flex-col gap-4">
            <Image src="/icons/comma.svg" width={60} height={60} alt="" />
            <p className="text-white text-md">
              I feel proud to be a part of ABC Foundation
            </p>
            <div className="flex flex-col gap-0 text-white text-md pb-4 md:pb-0">
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Title name="Press" />
            <div className="xxsm:w-full xsm:w-full xxsm:mt-4 xsm:mt-4 md:mt-0 md:w-auto flex flex-col md:flex-row gap-2">
              {PRESS.map((item, index) => (
                <Button
                  handleClick={() => handlBtnClick(index)}
                  key={index}
                  name={item.name}
                  outline={true}
                  isActive={index === activeButton ? true : false}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between py-10">
            {NEWS.map((item, index) => (
              <NewsCard item={item} key={index} />
            ))}
          </div>

          <div className="flex justify-center items-center text-primary-color gap-1 cursor-pointer">
            <p>See all news</p>
            <Image
              src="/icons/arrow-right-blue.svg"
              height={24}
              width={24}
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col justify-center items-center gap-5 py-10">
          <Title name="Subscribe us" />
          <p>For News, Updates and Promotional events</p>
          <div data-aos="flip-down" className="w-full md:w-4/5 bg-white p-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <input
                className="flex-1 py-2 outline-none xxsm:my-2 xsm:my-2 md:my-0"
                placeholder="enter your email address"
              />
              <Button name="Subscribe Now" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-color text-white">
        <div className="container flex flex-col md:flex-row justify-center items-center py-16">
          <div className="w-full md:w-1/2 py-2">
            <h1 className="text-4xl text-white">ABC</h1>
            <p className="text-white opacity-70 text-sm tracking-widest">
              FOUNDATION
            </p>
            <p
              style={{ fontSize: "12px" }}
              className="text-white opacity-70 w-full md:w-1/2 py-3"
            >
              A passionate group of people who wishes to inspire a nation and
              beyond. ABC Foundation is an educational voluntary organisation
              that originated from Bangladesh.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center gap-x-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Visit</h1>
              <span style={{ fontSize: "13px" }}>Projects</span>
              <span style={{ fontSize: "13px" }}>Sponsors</span>
              <span style={{ fontSize: "13px" }}>Gallery</span>
              <span style={{ fontSize: "13px" }}>Sign in</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Help</h1>
              <span style={{ fontSize: "13px" }}>FAQ</span>
              <span style={{ fontSize: "13px" }}>Contact Us</span>
              <span style={{ fontSize: "13px" }}>About Us</span>
              <span style={{ fontSize: "13px" }}>Volunteers</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Contact Us</h1>
              <div className="flex gap-1">
                <Image src="/icons/map.svg" width={16} height={16} alt="" />
                <span style={{ fontSize: "13px" }} className="text-white">Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-1">
                <Image src="/icons/smartphone.svg" width={16} height={16} alt="" />
                <span style={{ fontSize: "13px" }} className="text-white">+8801XXXXXX</span>
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontSize: "13px" }}>Social Media</span>
                <Image src="/icons/frame.svg" width={96} height={96} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
