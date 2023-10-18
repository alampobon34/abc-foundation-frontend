"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrap">
      <div className="flex justify-between items-center">
        <div style={{ lineHeight: "10px" }}>
          <h1 className="text-xl text-primary-color">ABC</h1>
          <p style={{ letterSpacing: "4px" }}>FOUNDATION</p>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-6">
          <ul className="flex justify-center items-center gap-6 opacity-90">
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">Home</Link>
            </li>
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">Donations</Link>
            </li>
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">Projects</Link>
            </li>
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">Media</Link>
            </li>
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">About us</Link>
            </li>
            <li className="text-primary-color hover:text-secondary-color font-light">
              <Link href="/">Blog</Link>
            </li>
          </ul>
          <Button name="Sign in" />
        </div>
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <Image
              className="cursor-pointer"
              src="/icons/cross.svg"
              height={30}
              width={30}
              alt=""
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/icons/menu.svg"
              height={30}
              width={30}
              alt=""
            />
          )}
        </div>

        {toggle && (
          <div
            className={`absolute top-14 left-0 right-0 py-2 w-screen gradient-navbar bg-primary-color ${
              toggle
                ? "block h-auto transition ease-in duration-300"
                : "h-0 hidden"
            }`}
          >
            <div className="container">
              <ul className="flex flex-col gap-4 text-primary-black-color text-center">
                <li className="text-white font-light">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white font-light">
                  <Link href="/">Donations</Link>
                </li>
                <li className="text-white font-light">
                  <Link href="/">Projects</Link>
                </li>
                <li className="text-white  font-light">
                  <Link href="/">Media</Link>
                </li>
                <li className="text-white  font-light">
                  <Link href="/">About Us</Link>
                </li>
                <li className="text-white  font-light">
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
