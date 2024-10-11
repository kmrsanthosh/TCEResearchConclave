import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border border-red-700 py-3 px-12">
      <Image
        src={"/assets/logos/TCE-Logo.svg"}
        alt={"TCE Logo"}
        height={300}
        width={300}
      />
      <div className="flex flex-row space-x-5 ">
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
