import Image from "next/image"
import LaptopImage from '../../../../public/tabletIamge.png'

export default function Info() {
    return(
        <section>
            <div className="aboslute w-2/5  translate-x-[10%] translate-y-[-160%] ">
                <span className="text-custom-blue font-bold size-24 text-6xl">Bringing companies and customers together, anywhere</span>
                <p>An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
            </div>
            <div>
                <Image src={LaptopImage} alt="ImageTablet" width={482} height={672} className="fixed right-0 transform translate-x-[-50%] translate-y-[-150%] border border-8 border-black border-solid rounded-2xl"/>
            </div>
        </section>
    )

}