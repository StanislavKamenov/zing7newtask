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
            <div className="aboslute w-2/5  translate-x-[10%] translate-y-[-40%]">
                <span className="text-custom-blue font-bold size-24 text-6xl">Bringing companies and customers together, anywhere</span>
                <div className="flex mt-[2rem] w-[410px] h-[84px]">
                <p>An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
                </div>
                <div>
                    <input  className="w-[475[px] h-[72px] mt-[2rem]" placeholder="Enter Your Email" type="text" name="" id="" />
                    <button className="w-[142px] h-[56px] bg-custom-blue text-white border rounded-2xl focus: border-none">Try For Free</button>
                    <p className="h-[17px] text-custom-grey mt-[1rem] text-xs">Full access. No credit card required.</p>
                </div>
            </div>
            <div className="h-[40px] flex space-x-20 ml-[3rem]">
                <p>Trusted by 1,000+ customers</p>
                <Image className= "w-[97.21px] h-[32px]"src={Google} alt="" />
                <Image className= "w-[135.88px] h-[17.2px]" src={Atlassian} alt="" />
                <Image className= "w-[95.63px] h-[20px]" src={Canon} alt="" />
                <Image className= "w-[129.86px] h-[30.96px]" src={Walmart} alt="" />
                <Image className= "w-[95.03px] h-[29.24px]" src={Amazon} alt="" />
                </div>
            <div>
                <Image src={LaptopImage} alt="ImageTablet" width={482} height={672} className="fixed right-60 bottom-80 transform  border border-8 border-black border-solid rounded-2xl"/>
            </div>
        </section>
    )
}
