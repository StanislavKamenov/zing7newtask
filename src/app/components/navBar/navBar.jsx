'use client'
import { useState } from "react"
import Image from "next/image"
import Logo from "../../../../public/Logo.png"
import { CiMenuBurger } from "react-icons/ci";

export default function navBar() {
    
    const [isNav, setIsNav] = useState(false);

    function HandleClick() {
        setIsNav(prev => !prev)
    }


    return (
        <header className="max-w-[1440px] max-h-[10vh] lg:flex-row lg:justify-between">
            <nav>
                <ul>
                    <div className="space-x-10 mt-[-2rem] mr-[25rem] font-semibold">
                        <a href="">Product</a>
                        <a href="">Pricing</a>
                        <a href="">Company</a>
                        <a href="">Resources</a>
                        <a href="">Contact</a>
                    </div>
                </ul>
                <div className="space-x-5 fixed right-0 mt-[-2rem] mr-[10rem]">
                    <button>Log In</button>
                    <button>Try For Free</button>
                </div>
                <div className="fixed left-[calc(15%-0.5px)] top-14 transform translate-x-[-50%] translate-y-[10%]">
                    <Image src={Logo} alt="Logo" width={95} height={28} />
                </div>
            </nav>

            {/* MobileNav */}
            
            {isNav && 
             <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0"> 
                <div className="bg-white w-64 h-full" >
                <CiMenuBurger onClick={HandleClick} className="text-black" size={32}/>
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