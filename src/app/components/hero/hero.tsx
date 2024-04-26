import Image from "next/image"
import LaptopImage from '../../../../public/tabletIamge.png'
import Amazon from '../../../../public/Amazon.png'
import Google from '../../../../public/Google.png'
import Canon from '../../../../public/Canon.png'
import Atlassian from '../../../../public/Atlassian.png'
import Walmart from '../../../../public/Walmart.png'

export default function Info() {
    return(
        <section>
            <div className="aboslute w-2/5  translate-x-[10%] translate-y-[-100%]  xl:-mt-[-35rem] lg:-mt-[-35rem] md:-mt-[-35rem] max-xl:mt-[40rem]">
                <span className="text-custom-blue font-bold size-24 text-6xl">Bringing companies and customers together, anywhere</span>
                <div className="flex mt-[2rem] w-[410px] h-[84px]">
                <p>An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
                </div>
                <div>
                    <input  className="w-[475[px] h-[72px]" placeholder="Enter Your Email" type="text" name="" id="" />
                    <button className="w-[142px] h-[56px] bg-custom-blue text-white border rounded-2xl focus: border-none">Try For Free</button>
                    <p className="h-[17px] text-custom-grey mt-[1rem] text-xs">Full access. No credit card required.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 md:space-x-10 lg:space-x-20 ml-6 md:ml-12 lg:ml-16 mt-6 md:mt-0 lg:-mt-60">
            <p className="text-center md:text-left">Trusted by 1,000+ customers</p>
            <Image className="w-24 md:w-auto h-8 md:h-auto" src={Google} alt="" />
            <Image className="w-32 md:w-auto h-4 md:h-auto" src={Atlassian} alt="" />
            <Image className="w-20 md:w-auto h-5 md:h-auto" src={Canon} alt="" />
            <Image className="w-28 md:w-auto h-7 md:h-auto" src={Walmart} alt="" />
            <Image className="w-20 md:w-auto h-6 md:h-auto" src={Amazon} alt="" />
        </div>

            <div>
                <Image src={LaptopImage} alt="ImageTablet" width={482} height={672} className="absolute xl:right-60 xl:bottom-80 lg:right-20 max-xl:bottom-10 md:bottom-60 transform  border border-8 border-black border-solid rounded-2xl"/>
            </div>
        </section>
    )
}
