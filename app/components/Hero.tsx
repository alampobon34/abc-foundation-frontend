import { url } from "inspector";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row"
      // style={{ backgroundImage: `url(${"/bg.jpg"})` }}
    >
      <div
        style={{ marginLeft: "10%" }}
        className="flex flex-col gap-6 w-full mt-10 md:w-1/2"
      >
        <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000" className="text-title-color text-6xl">
          Let&apos;s <br />
          Empower <br />
          the people
        </h1>
        <p className="text-lg">
          Rehabiitation project for people <br />
          who have lost their jobs during the
          <br />
          pandemic.
        </p>
        <div>
          <Button name="Donate Now" />
        </div>
      </div>
      <div className="w-screen bg-blue-100 md:-mt-16">
        <Image data-aos="fade-left" data-aos-duration="3000"
          className="w-full z-30 object-contain"
          src="/bg.png"
          height={200}
          width={200}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
