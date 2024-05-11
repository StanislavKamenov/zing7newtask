import Image from "next/image"
import News1 from "../../../../public/News/news1.png"
import News2 from "../../../../public/News/news2.png"

export default function news() {
    return(
        <div className="w-[1140px] h-[726px]">
            <div>
                <p>What’s new at Roooby?</p>
            </div>
            <div className="flex absolute">
                <p>Service</p>
                <Image src={News1} alt="" />
                <div>
                <p>Service</p>
                <Image src={News2} alt="" />
                </div>
            </div>
        </div>
    )
}