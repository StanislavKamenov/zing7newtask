import Image from "next/image"
import infoImg1 from "../../../../public/infosection/infoimg1.png"
import success from "../../../../public/infosection/success_icon.png"

export default function Info() {
    return(
        <div className="flex relative w-full max-w-[1140px] max-h-[604px] mt-[5vw] items-start">
            <div className="flex flex-col">
                <div className="ml mr-auto h-0.5 w-[59.5vw] bg-black"></div>
                <div className="flex justify-center items-center rounded-[5px] w-[65px] h-[32px] mt-20 bg-custom-yellow font-bold text-custom-grey">SALES</div>
                <div className="mt-6 text-5xl font-bold w-[440px] h-[116px]">
                    <h2>Increase company revenue up to 65%</h2>
                </div>
                <div className=" w-[487px]">
                    <p>Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
                    <div>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-10">
                <Image src={infoImg1} alt="" width={555} height={555} />
            </div>
        </div>
    )
}
