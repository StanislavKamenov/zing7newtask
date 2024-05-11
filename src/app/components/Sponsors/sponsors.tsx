import Image from "next/image";
import Sponsors1 from "../../../../public/Sponsors/sponsors1.png";
import Sponsors2 from "../../../../public/Sponsors/sponsors2.png";
import Sponsors3 from "../../../../public/Sponsors/sponsors3.png";
import Sponsors4 from "../../../../public/Sponsors/sponsors4.png";
import Sponsors5 from "../../../../public/Sponsors/sponsors5.png";
import Sponsors6 from "../../../../public/Sponsors/sponsors6.png";
import Sponsors7 from "../../../../public/Sponsors/sponsors7.png";
import Sponsors8 from "../../../../public/Sponsors/sponsors8.png";
import Sponsors9 from "../../../../public/Sponsors/sponsors9.png";
import Sponsors10 from "../../../../public/Sponsors/sponsors10.png";

export default function Sponsors() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="max-w-[1440px]">
                <div className="text-center mb-4">
                    <p className="font-bold text-4xl">Over 300+ integrations</p>
                    <span>Expand the capabilities of Roooby with hundreds of apps and integrations</span>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <Image src={Sponsors1} width={120} height={120} alt='' />
                    <Image src={Sponsors2} width={288} height={120} alt='' />
                    <Image src={Sponsors3} width={288} height={120} alt='' /> 
                    <Image src={Sponsors4} width={120} height={120} alt='' />
                    <Image src={Sponsors5} width={288} height={120} alt='' />
                    <Image src={Sponsors6} width={372} height={120} alt='' />
                    <Image src={Sponsors7} width={120} height={120} alt='' />
                    <Image src={Sponsors8} width={120} height={120} alt='' />
                    <Image src={Sponsors9} width={372} height={120} alt='' />
                    <Image src={Sponsors10} width={120} height={120} alt='' />
                </div>
                <div className="text-center mt-4">
                    <p className="text-black font-bold">See all apps and extensions</p>
                </div>
            </div>
        </div>
    );
}
