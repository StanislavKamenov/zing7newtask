import Image from "next/image"
import News1 from "../../../../public/News/news1.png"
import News2 from "../../../../public/News/news2.png"

export default function news() {
    return(
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What’s new at Roooby?</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col">
                    <p className="text-custom-grey2 font-bold">Service</p>
                    <div className="h-0.5 w-full bg-custom-grey2 mt-3"></div>
                    <div className="mt-4">
                        <Image src={News1} alt="" className="object-cover w-full h-auto" />
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-xl">How To Deliver a Successful Product Launch</p>
                        <p className="text-sm font-medium text-gray-500 mt-1">05 Sep 2024, <span className="text-custom-grey2"> by Joshua Nash</span></p>
                    </div>
                </div>
                <div className="flex flex-col mt-10 md:mt-0">
                    <p className="text-custom-grey2 font-bold">Service</p>
                    <div className="h-0.5 w-full bg-custom-grey2 mt-3"></div>
                    <div className="mt-4">
                        <Image src={News2} alt="" className="object-cover w-full h-auto" />
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-xl">What Makes an Authentic Employee Profile, and Why Does It Matter?</p>
                        <p className="text-sm font-medium text-gray-500 mt-1">07 Sep 2023, <span className="text-custom-grey2">by Ivan Neshev</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
