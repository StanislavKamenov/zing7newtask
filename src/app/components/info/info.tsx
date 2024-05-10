import React from "react";
import Image from "next/image";
import infoImg1 from "../../../../public/infosection/infoimg1.png";
import success from "../../../../public/infosection/success_icon.png";
import infoImg2 from "../../../../public/infosection/infoimg2.png";
import infoImg3 from "../../../../public/infosection/infoimg3.png";

const Info = () => {
    const sections = [
        {
            image: infoImg1,
            title: "SALES",
            description: "Increase company revenue up to 65%",
            points: [
                "Close more deals with single-page contact management",
                "Enjoy one-click calling, call scripts and voicemail automation",
                "Track stages and milestones of your deals to keep the sales process on track"
            ]
        },
        {
            image: infoImg2,
            title: "MARKETING",
            description: "Increase company revenue up to 65%",
            points: [
                "Close more deals with single-page contact management",
                "Enjoy one-click calling, call scripts and voicemail automation",
                "Track stages and milestones of your deals to keep the sales process on track"
            ]
        },
        {
            image: infoImg3,
            title: "Service",
            description: "Increase company revenue up to 65%",
            points: [
                "Resolve every issue in the shortest possible time with powerful ticketing features",
                "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
                "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard"
            ]
        }
    ];

    return (
        <div>
            <div className="lg:flex relative w-full max-w-[1140px] mt-[5vw] items-start">
                <div className="flex flex-col lg:w-1/2 mr-4">
                    <div className="w-full">
                        <div className="h-0.5 w-[46vw] bg-black"></div>
                    </div>
                    <div className="flex justify-center items-center rounded-[5px] w-[112px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">{sections[0].title}</div>
                    <div className="mt-6 text-5xl font-bold">
                        <h2>{sections[0].description}</h2>
                    </div>
                    <div className="w-full">
                        <p>{sections[0].description}</p>
                        {sections[0].points.map((point, index) => (
                            <div key={index} className="flex items-center mt-6">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:absolute right-0 top-10 lg:w-1/2 lg:top-auto lg:bottom-0">
                    <Image src={sections[0].image} alt="" width={555} height={555} />
                </div>
            </div>
            <div className="lg:flex relative w-full max-w-[1140px] mt-[5vw] items-start">
                <div className="flex flex-col lg:w-1/2 mr-4">
                    <div className="w-full">
                        <div className="h-0.5 w-[46vw] bg-black"></div>
                    </div>
                    <div className="flex justify-center items-center rounded-[5px] w-[112px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">{sections[1].title}</div>
                    <div className="mt-6 text-5xl font-bold">
                        <h2>{sections[1].description}</h2>
                    </div>
                    <div className="w-full">
                        <p>{sections[1].description}</p>
                        {sections[1].points.map((point, index) => (
                            <div key={index} className="flex items-center mt-6">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:absolute left-0 top-10 lg:w-1/2 lg:top-auto lg:bottom-0">
                    <Image src={sections[1].image} alt="" width={555} height={555} />
                </div>
            </div>
            <div className="lg:flex relative w-full max-w-[1140px] mt-[5vw] items-start">
                <div className="flex flex-col lg:w-1/2 mr-4">
                    <div className="w-full">
                        <div className="h-0.5 w-[46vw] bg-black"></div>
                    </div>
                    <div className="flex justify-center items-center rounded-[5px] w-[112px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">{sections[2].title}</div>
                    <div className="mt-6 text-5xl font-bold">
                        <h2>{sections[2].description}</h2>
                    </div>
                    <div className="w-full">
                        <p>{sections[2].description}</p>
                        {sections[2].points.map((point, index) => (
                            <div key={index} className="flex items-center mt-6">
                                <Image src={success} alt="Success Icon" width={24} height={24} />
                                <span className="ml-2">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:absolute right-0 top-10 lg:w-1/2 lg:top-auto lg:bottom-0">
                    <Image src={sections[2].image} alt="" width={555} height={555} />
                </div>
            </div>
        </div>
    );
};

export default Info;
