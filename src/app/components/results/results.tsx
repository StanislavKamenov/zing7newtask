import Image from "next/image"
import Oval1 from "../../../../public/results/Oval1.png"
import Oval2 from "../../../../public/results/Oval2.png"

export default function Results() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-0 pt-8">
            <div className="relative">
            <div>
                <p className="font-bold text-4xl">Real-life results and revenue</p>
                <span>See how companies like yours have smashed their sales success goals</span>
                </div>
                <div className="border-t-2 border-solid border-gray-300 mb-8"></div>
                <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="mr-6 md:mr-12 md:mt-8">
                        <span className="font-bold text-4xl md:text-6xl">$2.5M</span>
                        <p className="font-bold p-2 md:p-4 -ml-3 text-lg md:text-xl lg:text-2xl h-24 md:h-36 lg:h-48 overflow-hidden">Generate sales</p>
                    </div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-bold w-full md:w-3/5 lg:w-2/3 mb-4 md:mb-0 md:mr-12 md:ml-32">
                        <p>Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
                        <div className="flex items-center mt-4">
                            <div className="mr-4 md:mr-8">
                                <Image src={Oval1} alt="" />
                            </div>
                            <div>
                                <p className="font-bold">Nellie Foster</p>
                                <span className="text-sm md:text-custom-grey">Founder & CEO, Foster Business Strategies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-8 md:mt-16">
                <div className="border-t-2 border-solid border-gray-300 mb-8"></div>
                <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="mr-6 md:mr-12 md:mt-8">
                        <span className="font-bold text-4xl md:text-6xl">45%</span>
                        <p className="font-bold p-2 md:p-4 -ml-3 text-lg md:text-xl lg:text-2xl h-24 md:h-36 lg:h-48 overflow-hidden">Grew revenue</p>
                    </div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-bold w-full md:w-3/5 lg:w-2/3 mb-4 md:mb-0 md:mr-12 md:ml-32">
                        <p>Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                        <div className="flex items-center mt-4">
                            <div className="mr-4 md:mr-8">
                                <Image src={Oval2} alt="" />
                            </div>
                            <div>
                                <p className="font-bold">Lawrence Gibbs</p>
                                <span className="text-sm md:text-custom-grey">Marketing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
