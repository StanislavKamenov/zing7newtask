import Image from "next/image";
import Facebook from "../../../../public/footer/Facebook.png";
import Linkedin from "../../../../public/footer/Linkedin.png";
import Twitter from "../../../../public/footer/Twitter.png";
import Logo from "../../../../public/Logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-16 lg:mt-32">
                <div className="flex flex-col items-center lg:items-start">
                    <Image src={Logo} alt="Logo" />
                    <div className="w-full lg:w-[230px] mt-8 lg:mt-16 text-center lg:text-left">
                        <span>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</span>
                    </div>
                    <div className="flex space-x-5 mt-6">
                        <Image src={Facebook} alt="Facebook" />
                        <Image src={Linkedin} alt="Linkedin" />
                        <Image src={Twitter} alt="Twitter" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-16 lg:mt-0 lg:ml-16 space-y-16 lg:space-y-0 lg:space-x-32">
                    <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center lg:items-start">
                        <p className="font-bold">Company</p>
                        <p>About</p>
                        <p>Pricing</p>
                        <p>Jobs</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center lg:items-start">
                        <p className="font-bold">Product</p>
                        <p>Sales software</p>
                        <p>Features</p>
                        <p>Privacy</p>
                        <p>Marketplace</p>
                        <p>Status</p>
                        <p>API</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center lg:items-start">
                        <p className="font-bold">Discover</p>
                        <p>Partner Program</p>
                        <p>Get our newsletter</p>
                        <p>Sales Pipeline</p>
                        <p>What is CRM?</p>
                        <p>CRM Comparison</p>
                        <p>Resources</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-center lg:items-start">
                        <p className="font-bold">Help Center</p>
                        <p>Community</p>
                        <p>Knowledge Base</p>
                        <p>Academy</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-16 mt-16 lg:mt-32">
                <p>© Copyright 2024</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
            </div>
        </div>
    );
}
