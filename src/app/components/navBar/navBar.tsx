'use client'
import { useState } from "react"
import Image from "next/image"
import Logo from "../../../../public/Logo.png"
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
    
    const [isNav, setIsNav] = useState(false); 

    function handleClick() {
        setIsNav(prev => !prev)
    }

    const Menu = [
      {title: 'Product', path: '/', id: '1'},
      {title: 'Pricing', path: './pricing', id: '2'},
      {title: 'Company', path: './company', id: '3'},
      {title: 'Blog', path: './blog', id: '4'},
      {title: 'Contact', path: './contact', id: '5'}
    ]

    return (
        <header className="flex justify-between items-center max-h-[10vh] mx-auto px-4 xl:px-0 xl:pr-[50rem] mt-[-2rem]">
            <div className="flex items-center space-x-4">
                {/* Always visible logo */}
                <Image src={Logo} alt="Company Logo" width={95} height={28}/>
    
                <div className="relative flex justify-center w-full">
                    {/* Responsive Menu Button */}
                    <button onClick={handleClick} className="text-xl xl:hidden">
                        {isNav ? <AiOutlineClose /> : <CiMenuBurger />}
                    </button>

                    {/* Dropdown Menu */}
                    {isNav && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 bg-white shadow-lg z-10">
                            {Menu.map(data => (
                                <div key={data.id} className="flex flex-col">
                                    <a href={data.path} className="hover:text-gray-600 px-4 py-4">
                                        {data.title}
                                    </a>
                                </div>
                            ))}
                            <div className="flex flex-col">
                                <button className="hover:text-blue-900 px-4 py-4 font-extrabold transition duration-500">Log In</button>
                                <button className="bg-custom-blue text-white w-full border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100 py-4">Try For Free</button>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Full-size navigation */}
                <nav className="hidden xl:flex space-x-10 text-xl">
                    {Menu.map(data => (
                        <a key={data.id} href={data.path} className="hover:text-gray-600 ml-[5rem]">
                            {data.title}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="hidden xl:flex space-x-10 fixed right-0 mr-[20rem]">
                <button className="font-extrabold transition duration-500 hover:text-blue-900">Log In</button>
                <button className="bg-custom-blue text-white w-[142px] h-[56px] border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100">Try For Free</button>
            </div>
        </header>
    );
}