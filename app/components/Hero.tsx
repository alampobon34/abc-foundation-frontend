import { url } from "inspector";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${'/bg.png'})` }}>
      <div className="container flex">
        <div className="flex flex-col gap-8 mt-10">
          <h1 className="text-title-color text-6xl">
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
      </div>
    </div>
  );
};

export default Hero;
