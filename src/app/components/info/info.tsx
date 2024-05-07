import Image from "next/image";
import infoImg1 from "../../../../public/infosection/infoimg1.png";
import success from "../../../../public/infosection/success_icon.png";
import infoImg2 from "../../../../public/infosection/infoimg2.png";
import infoImg3 from "../../../../public/infosection/infoimg3.png";

export default function Info() {
    return (
        <div className="flex relative w-full max-w-[1140px] max-h-[604px] mt-[5vw] items-start flex-wrap">
            <div className="flex flex-col">
                <div className="ml mr-auto h-0.5 w-[59.5vw] bg-black"></div>
                <div className="flex justify-center items-center rounded-[5px] w-[65px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">SALES</div>
                <div className="mt-6 text-5xl font-bold w-[440px] h-[116px]">
                    <h2>Increase company revenue up to 65%</h2>
                </div>
                <div className=" w-[487px]">
                    <p>Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
                    <div className="flex items-center ml-2 space-x-4 mt-6">
                        <Image src={success} alt="Success Icon" width={24} height={24} />
                        <span className="ml-2">Close more deals with single-page contact management</span>
                    </div>
                    <div className="flex items-center ml-2 space-x-4 space-y-7">
                        <Image src={success} alt="Success Icon" width={24} height={24} />
                        <span className="ml-2">Enjoy one-click calling, call scripts and voicemail automation</span>
                    </div>
                    <div className="flex items-center ml-2 space-x-4 space-y-7">
                        <Image src={success} alt="Success Icon" width={24} height={24} />
                        <span className="ml-2">Track stages and milestones of your deals to keep the sales process on track</span>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-10">
                <Image src={infoImg1} alt="" width={555} height={555} />
            </div>
            <div className="flex relative w-full max-w-[1140px] max-h-[604px] mt-[5vw] items-start flex-wrap">
                <div className="relative w-full max-w-[1140px] max-h-[604px] mt-[5vw] items-start flex-wrap">
                    <div className="w-full">
                        <div className="h-0.5 bg-black"></div>
                    </div>
                    <div className="absolute left-0 top-10">
                        <Image src={infoImg2} alt="" width={555} height={555} />
                    </div>
                    <div className="flex flex-col ml-[570px]">
                        <div className="flex justify-center items-center rounded-[5px] w-[112px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">MARKETING</div>
                        <div className="mt-6 text-5xl font-bold w-[440px] h-[116px]">
                            <h2>Increase company revenue up to 65%</h2>
                        </div>
                        <div className="w-[487px]">
                            <p>Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.</p>
                            <div className="flex items-center ml-2 space-x-4 mt-6">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">Close more deals with single-page contact management</span>
                            </div>
                            <div className="flex items-center ml-2 space-x-4 space-y-7">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">Enjoy one-click calling, call scripts and voicemail automation</span>
                            </div>
                            <div className="flex items-center ml-2 space-x-4 space-y-7">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">Track stages and milestones of your deals to keep the sales process on track</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex relative w-full max-w-[1140px] max-h-[604px] mt-[5vw] items-start flex-wrap">
                <div className="flex flex-col">
                    <div className="ml mr-auto h-0.5 w-[59.5vw] mt-8 bg-black"></div>
                    <div className="flex justify-center items-center rounded-[5px] w-[85px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">Service</div>
                    <div className="mt-6 text-5xl font-bold w-[440px] h-[116px]">
                        <h2>Increase company revenue up to 65%</h2>
                    </div>
                    <div className=" w-[550px]">
                        <p>Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. </p>
                        <div className="flex items-center ml-2 space-x-4 mt-6">
                            <Image src={success} alt="Success Icon" width={24} height={24} />
                            <span className="ml-2">Resolve every issue in the shortest possible time with powerful ticketing features</span>
                        </div>
                        <div className="flex items-center ml-2 space-x-4 space-y-7">
                            <Image src={success} alt="Success Icon" width={24} height={24} />
                            <span className="ml-2">Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</span>
                        </div>
                        <div className="flex items-center ml-2 space-x-4 space-y-7">
                            <Image src={success} alt="Success Icon" width={24} height={24} />
                            <span className="ml-2">Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</span>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-10">
                    <Image src={infoImg3} alt="" width={555} height={555} />
                </div>
            </div>
        </div>
    )
}
