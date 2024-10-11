import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border border-red-700 py-3 px-12">
      <div className="relative w-20 h-8 sm:w-24 sm:h-10 md:w-32 md:h-12 lg:w-80 lg:h-16">
        <Image
          src="/assets/logos/TCE-Logo.svg"
          alt="TCE Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <div className="hidden lg:flex flex-row space-x-5 ">
        <h1 className="font-medium ">Home</h1>
        <h1 className="font-medium ">Submissions</h1>
        <h1 className="font-medium ">Program</h1>
        <h1 className="font-medium ">Speakers</h1>
        <h1 className="font-medium ">Participate</h1>
        <h1 className="font-medium ">Organization</h1>
        <h1 className="font-medium ">Workshops</h1>
        <h1 className="font-medium ">Sponsorship</h1>
        <h1 className="font-medium ">CRI</h1>
      </div>
    </nav>
  );
};

export default Navbar;
