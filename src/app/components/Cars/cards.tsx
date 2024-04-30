import Image from "next/image";
import Card1 from "../../../../public/Cards/cards1.png";
import Card2 from "../../../../public/Cards/cards2.png";
import Card3 from "../../../../public/Cards/cards3.png";

export default function Cards() {
    return (
        <div className="bg-custom-blue mt-20 text-white md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-12 w-full min-h-screen flex flex-col items-center justify-center p-4 md:flex-row md:items-start md:justify-around relative">
            <div className="max-w-md md:max-w-lg lg:max-w-xl text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-[5vw] w-[25vw]">Here's how Roooby can benefit your business</h1>
            </div>
            <div className="mt-16 md:mt-0 max-w-sm md:max-w-md lg:max-w-lg text-base md:text-lg">
                <p className="mt-[5vw]">
                    Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.
                </p>
            </div> 
            <div className="mt-8 md:mt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[-25vw] w-[374px] h-[439px]">
                <Image src={Card1} alt="Card Image" width={63} height={72} />
                <div className="ml-0 mr-[7vw] mt-16 h-5 border-t border-white"></div> 
                <p>Lead customers to happiness</p>
                <div className="w-[10vw]">
                    <p>Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </div>
            <div className="mt-8 md:mt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[0vw]">
                <Image src={Card2} alt="Card Image" width={63} height={72} />
                 <div className="ml-0 mr-[1vw] mt-16 h-5 border-t border-white"></div>
                <p>Support your support</p>
                <div className="w-[10vw]">
                    <p>Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
                </div>
            </div>
            <div className="mt-8 md:mt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[25vw]">
                <Image src={Card3} alt="Card Image" width={63} height={72} />
                 <div className="ml-0 mr-[1vw] mt-16 h-5 border-t border-white"></div>
                <p>Grow without growing pains</p>
                <div className="w-[10vw]">
                    <p>Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.</p>
                </div>
            </div>
        </div>
    );
}
