import Image from 'next/image'
import React from 'react'
import { Mail, PhoneCall, User } from "lucide-react";

const Header = () => {
  return (
    <div className="w-[60%] mx-auto flex gap-24 justify-between lg:w-full lg:gap-4 items-center">
      <Image src='/kwen.jpg' width={300} height={300} alt="kwen" className="round lg:w-[90px] lg:h-[90px]"/>
      <div className=" lg:text-sm sm:text-xs">
        <h1 className="capitalize flex gap-1"> <span><User size={20}/></span>anikwenze emmanuel nwachukwu</h1>
        <h1 className="flex gap-1"> <span><Mail size={20}/></span> emmanuelanikwenze1@gmail.com</h1>
        <h1 className="flex gap-1"> <span><PhoneCall size={20}/></span> +2348127064799</h1>
      </div>
     </div>
  )
}

export default Header
