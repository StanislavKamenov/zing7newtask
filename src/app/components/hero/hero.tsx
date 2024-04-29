import { useState } from "react"
import Image from "next/image"
import LaptopImage from '../../../../public/tabletimage.png'
import Amazon from '../../../../public/Amazon.png'
import Google from '../../../../public/Google.png'
import Canon from '../../../../public/Canon.png'
import Atlassian from '../../../../public/Atlassian.png'
import Walmart from '../../../../public/Walmart.png'

export default function Info() {
    return( 
        <div className="relative max-w-full overflow-hidden mt-[5vw]">
            <div className="text-center xl:text-left">
                <p className="text-3xl xl:text-6xl w-full xl:w-[50rem] max-w-[639px] text-custom-blue font-bold mb-8">Bringing companies and customers together, anywhere</p>
                <p className="text-base xl:text-lg max-w-full xl:max-w-[380px] text-custom-black">An awesome & powerful tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.</p>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-4 xl:mt-[4rem]">
                <input type="text" placeholder="Enter Your Email" className="text-sm xl:text-base w-full xl:w-auto p-2 xl:p-3 border border-gray-300 rounded-lg"/>
                <button className="mt-2 xl:mt-0 ml-0 xl:ml-4 bg-custom-blue text-white w-full xl:w-[142px] h-[56px] border rounded-2xl font-extrabold transition duration-500 hover:text-teal-100 p-3">Try For Free</button>
            </div>
            <div className="xl:left-[42vw] xl:top-[-22vw] ml-[40vw] mt-[-23vw]">
                <Image src={LaptopImage} alt="" width={675} height={482} layout="intrinsic"/>
            </div>
            <div className="mt-8 xl:mt-[5vw]">
                <p className="text-sm xl:text-base">Trusted by 1,000+ customers</p>
                <div className="flex overflow-x-auto no-scrollbar">
                    <Image src={Google} width={97.21} height={32} alt="" className="mx-2"/>
                    <Image src={Atlassian} width={135.88} height={17.2} alt="" className="mx-2"/>
                    <Image src={Canon} width={95.63} height={20} alt="" className="mx-2"/>
                    <Image src={Walmart} width={129.86} height={30.96} alt="" className="mx-2"/>
                    <Image src={Amazon} width={95.03} height={29.24} alt="" className="mx-2"/>
                </div>
            </div>
        </div>
    )
}
