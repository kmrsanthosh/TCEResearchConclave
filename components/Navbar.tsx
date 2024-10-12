import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border border-red-700 py-3 px-5 sm:px-8 md:px-12">
      <div className="relative w-44 h-10 sm:w-44 sm:h-14 md:w-64 md:h-16 lg:w-72 lg:h-16">
        <Image
          src="/assets/logos/TCE-Logo.svg"
          alt="TCE Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* <div className="hidden lg:flex flex-row space-x-5 ">
        <h1 className="font-medium ">Home</h1>
        <h1 className="font-medium ">Submissions</h1>
        <h1 className="font-medium ">Program</h1>
        <h1 className="font-medium ">Speakers</h1>
        <h1 className="font-medium ">Participate</h1>
        <h1 className="font-medium ">Organization</h1>
      </div> */}
    </nav>
  );
};

export default Navbar;
