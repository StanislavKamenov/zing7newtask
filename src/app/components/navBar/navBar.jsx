'use client'
import { useState } from "react"
import Image from "next/image"
import Logo from "../../../../public/Logo.png"
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

export default function navBar() {
    
    const [isNav, setIsNav] = useState(false);

    function handleClick() {
        setIsNav(prev => !prev)
    }


    return (
        <header className= "max-w-[1440px] max-h-[10vh] lg:flex-row lg:justify-between">
            <nav>
                <ul>
                    <div className="space-x-10 mt-[-2rem] mr-[25rem] font-semibold">
                        <a href="" className="transition duration-500 hover:text-blue-900">Product</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Pricing</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Company</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Resources</a>
                        <a href="" className="transition duration-500 hover:text-blue-900">Contact</a>
                    </div>
                </ul>
                <div className="space-x-16 fixed right-0 mt-[-2rem] mr-[10rem]">
                    <button className="font-extrabold transition duration-500 hover:text-blue-900">Log In</button>
                    <button className="bg-custom-blue text-white w-[113px] h-[33px] rounded-tr-2xl font-extrabold transition duration-500 hover:text-teal-100">Try For Free</button>
                </div>
                <div className="fixed left-[calc(15%-0.5px)] top-14 transform translate-x-[-50%] translate-y-[10%]">
                    <Image src={Logo} alt="Logo" width={95} height={28} className="cursor-pointer" />
                </div>
                <CiMenuBurger onClick={handleClick} className="max-lg:flex lg:hidden visible text-black absolute left-4 top-4" size={32} />
            </nav>

            {/* MobileNav */}
            {isNav && 
             <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0"> 
             <AiOutlineClose onClick={handleClick} className="max-lg:flex lg:hidden visible text-black absolute ml-[14rem] top-0" size={32} />
                <div className="bg-white w-64 h-full" >
                    <ul className="text-xl flex flex-col p-4">
                        <a href="">Product</a>
                        <a href="">Pricing</a>
                        <a href="">Company</a>
                        <a href="">Resources</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
            </div>}
        </header>
    );
}