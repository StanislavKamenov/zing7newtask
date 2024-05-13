import Image from "next/image";
import Facebook from "../../../../public/footer/Facebook.png";
import Linkedin from "../../../../public/footer/Linkedin.png";
import Twitter from "../../../../public/footer/Twitter.png";
import Logo from "../../../../public/Logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-[1440px] h-[561px] relative">
            <div className="flex flex-col items-start mt-32">
                <Image src={Logo} alt="Logo" />
                <div className="w-[230px] mt-16">
                    <span>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</span>
                </div>
                <div className="flex space-x-5 mt-6">
                    <Image src={Facebook} alt="Facebook" />
                    <Image src={Linkedin} alt="Linkedin" />
                    <Image src={Twitter} alt="Twitter" />
                </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[73px] h-[202px] -ml-32 space-y-5">
                <p className="font-bold -mt-32">Company</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Jobs</p>
                <p>Blog</p>
                <p>Careers</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[161px] h-[204px] ml-32 space-y-5">
                <p className="font-bold -mt-32">Product</p>
                <p>Sales software</p>
                <p>Features</p>
                <p>Privacy </p>
                <p>Marketplace</p>
                <p>Status</p>
                <p>API</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[161px] h-[204px] space-y-5 ml-[19vw]">
                <p className="font-bold -mt-32">Discover</p>
                <p>Partner Program</p>
                <p>Get our newsletter</p>
                <p>Sales Pipeline  </p>
                <p>What is CRM?</p>
                <p>CRM Comparison</p>
                <p>Resources</p>
            </div>
        </div>
    );
}
