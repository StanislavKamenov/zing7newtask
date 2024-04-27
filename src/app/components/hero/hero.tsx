'use client'
import { useState } from "react"
import Image from "next/image"
import LaptopImage from '../../../../public/tabletIamge.png'
import Amazon from '../../../../public/Amazon.png'
import Google from '../../../../public/Google.png'
import Canon from '../../../../public/Canon.png'
import Atlassian from '../../../../public/Atlassian.png'
import Walmart from '../../../../public/Walmart.png'

export default function Info() {

    return( 
        <div className="absolute xl:ml-[-45vw] mb-[-20vw]">
            <p className="text-6xl w-[50rem] max-w-[639px] text-custom-blue font-bold mb-8  max-sm:w-[16vw]">Bringing companies and customers together, anywhere</p>
            <p className="max-w-[380px] w-[25rem] text-custom-black">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.</p>
            <div className="flex mt-[4rem]">
                <input type="text" placeholder="Enter Your Email"/>
                <button className="bg-custom-blue text-white w-[142px] h-[56px] border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100 p-3">Try For Free</button>
            </div>
            <div className="">
            <Image src={LaptopImage} alt="" className="absolute ml-[45vw] mt-[-15vw] w-[675px] h-[482px]"/>
            </div>
        </div>
    )
}
