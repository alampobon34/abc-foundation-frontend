import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="wrap bg-transparent bg-opacity-60">
      <div className="flex justify-between items-center">
        <div style={{lineHeight: "10px"}}>
          <h1 className="text-xl text-primary-color">ABC</h1>
          <p style={{ letterSpacing: "4px" }}>FOUNDATION</p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <ul className="flex justify-center items-center gap-6 opacity-90">
            <li className="hover:text-primary-color">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary-color">
              <Link href="/">Donations</Link>
            </li>
            <li className="hover:text-primary-color">
              <Link href="/">Projects</Link>
            </li>
            <li className="hover:text-primary-color">
              <Link href="/">Media</Link>
            </li>
            <li className="hover:text-primary-color">
              <Link href="/">About us</Link>
            </li>
            <li className="hover:text-primary-color">
              <Link href="/">Blog</Link>
            </li>
          </ul>
          <Button name="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
