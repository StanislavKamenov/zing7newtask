import Image from "next/image";
import ImageReady from "../../../../public/Ready/BG.png";

export default function Ready() {
    return (
        <div className="relative w-full h-[50vh] lg:h-[468px]">
            <Image src={ImageReady} alt="" layout="fill" objectFit="cover" />
            <div className="absolute w-11/12 md:w-[40vw] lg:w-[30vw] top-1/2 transform -translate-y-1/2 left-5 md:left-10">
                <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Ready to supercharge your business?</p>
                <div className="mt-2 md:mt-4">
                    <p className="text-white text-sm md:text-base lg:text-lg">Ask about Roooby products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
                </div>
            </div>
            <div className="absolute bottom-[5vw] md:bottom-[8vw] lg:bottom-[10vw] right-5 md:right-16 lg:right-32">
                <button className="w-[140px] h-[48px] md:w-[170px] md:h-[54px] lg:w-[198px] lg:h-[64px] bg-white text-black rounded-2xl">Try For Free</button>
                <p className="text-white w-[200px] md:w-[250px] lg:w-[290px] text-xs md:text-sm lg:text-base mt-2">Full access. No credit card required.</p>
            </div>
        </div>
    );
}
