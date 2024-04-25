'use client'
import { useState } from "react"
import Image from "next/image"
import Logo from "../../../../public/Logo.png"
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
    
    const [isNav, setIsNav] = useState(true); 

    function handleClick() {
        setIsNav(prev => !prev)
    }

    return (
        <header className="max-w-[1440px] max-h-[10vh] lg:flex-row lg:justify-between">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex">
                <ul>
                    <div className="space-x-10 mt-[-2rem] mr-[25rem] font-semibold">
                        <a href="" className="transition duration-500 hover:text-blue-900">Product</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Pricing</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Company</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Resources</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Contact</a>
                    </div>
                </ul>
                <div className="space-x-10 fixed right-0 mt-[-2rem] mr-[20rem]">
                    <button className="font-extrabold transition duration-500 hover:text-blue-900">Log In</button>
                    <button className="bg-custom-blue text-white w-[142px] h-[56px] border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100">Try For Free</button>
                </div>
                <div className="fixed left-[calc(15%-0.5px)] top-14 transform translate-x-[-50%] translate-y-[10%]">
                    <Image src={Logo} alt="Logo" width={95} height={28} className="cursor-pointer" />
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className="lg:hidden">
                <CiMenuBurger onClick={handleClick} className="visible text-black absolute left-4 top-4" size={32} />
                <div className="visible text-black absolute space-x-1 left-12 top-5">
                    <Image src={Logo} alt="Logo" width={95} height={28} className="cursor-pointer lg:justify-between" />
                </div>
                <div className="space-x-16 fixed right-10 mt-[-5rem] mr-[0rem]">
                    <button className="bg-custom-blue text-white w-[113px] h-[33px] border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100">Try For Free</button>
                </div>
            </nav>

            {/* MobileNav */}
            {isNav && 
    <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0 flex justify-center items-center animate-fadeIn"> 
        <AiOutlineClose onClick={handleClick} className="max-lg:flex visible text-black absolute ml-[14rem] top-0" size={32} />
        <div className="bg-white p-4 rounded-md w-full h-full flex justify-center items-center">
            <ul className="text-2xl flex flex-col">
                <a href="" className="my-2">Product</a>
                <a href="" className="my-2">Pricing</a>
                <a href="" className="my-2">Company</a>
                <a href="" className="my-2">Resources</a>
                <a href="" className="my-2">Contact</a>
                <a className="my-2">Log In</a>
            </ul>
        </div>
    </div>
}

        </header>
    );
}
