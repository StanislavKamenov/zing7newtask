'use client'
import { useState } from 'react';
import Image from "next/image";
import Card1 from "../../../../public/Cards/cards1.png";
import Card2 from "../../../../public/Cards/cards2.png";
import Card3 from "../../../../public/Cards/cards3.png";

export default function Cards() {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleCardClick = (cardNumber) => {
        setSelectedCard(cardNumber === selectedCard ? -1 : cardNumber);
    };

    const isCardSelected = (cardNumber) => {
        return cardNumber === selectedCard;
    };

    return (
        <div className="bg-custom-blue mt-20 text-white md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-12 w-full min-h-screen flex flex-col items-center justify-center p-4 relative">
            <div className="max-w-md md:max-w-lg lg:max-w-xl text-center md:text-left mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-0">Here's how Roooby can benefit your business</h1>
                <div className="max-w-sm">
                    <p className="mt-4">
                        Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center">
                <div className="max-w-md md:mr-8 mb-8 md:mb-0">
                    <div className="text-center">
                        <div className={`mt-4 w-[374px] h-[439px] rounded-[1vw] ${isCardSelected(1) ? 'scale-105 transition-transform duration-500 bg-custom-yellow' : ''}`} onClick={() => handleCardClick(1)}>
                            <div className="text-left">
                                <Image src={Card1} alt="Card Image" width={63} height={72} className='ml-4 mt-[3vw]text' />
                                <div className="ml-4 mr-auto h-0.5 mt-[3vw] w-[90%] bg-white"></div>
                                <div className={`text-${isCardSelected(1) ? 'black' : 'white'} flex flex-col  justify-center pl-4`}>
                                    <p className='text-2xl font-bold w-[10vw] mt-[1vw]'>Lead customers to happiness</p>
                                    <div className="w-full">
                                        <p className='center mt-[2vw] w-[260px] h-[104px]'>Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-center">
                <div className="max-w-md md:mr-8 mb-8 md:mb-0">
                    <div className="text-center">
                        <div className={`mt-4 w-[374px] h-[439px] rounded-[1vw] ${isCardSelected(2) ? 'scale-105 transition-transform duration-500 bg-custom-yellow' : ''}`} onClick={() => handleCardClick(2)}>
                            <div className="text-left">
                                <Image src={Card2} alt="Card Image" width={63} height={72} className='ml-4 mt-[3vw]' />
                                <div className="ml-4 mr-auto h-0.5 mt-[3vw] w-[90%] bg-white"></div>
                                <div className={`text-${isCardSelected(1) ? 'black' : 'white'} flex flex-col  justify-center pl-4`}>
                                    <p className='text-2xl font-bold w-[10vw] mt-[1vw]'>Lead customers to happiness</p>
                                    <div className="w-full">
                                        <p className='center mt-[2vw] w-[260px] h-[104px]'>Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center">
                <div className="max-w-md md:mr-8 mb-8 md:mb-0">
                    <div className="text-center">
                        <div className={`mt-4 w-[374px] h-[439px] rounded-[1vw] ${isCardSelected(3) ? 'scale-105 transition-transform duration-500 bg-custom-yellow' : ''}`} onClick={() => handleCardClick(3)}>
                            <div className="text-left">
                                <Image src={Card3} alt="Card Image" width={63} height={72} className='ml-4 mt-[3vw]' />
                                <div className="ml-4 mr-auto h-0.5 mt-[3vw] w-[90%] bg-white"></div>
                                <div className={`text-${isCardSelected(1) ? 'black' : 'white'} flex flex-col  justify-center pl-4`}>
                                    <p className='text-2xl font-bold w-[10vw] mt-[1vw]'>Lead customers to happiness</p>
                                    <div className="w-full">
                                        <p className='center mt-[2vw] w-[260px] h-[104px]'>Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
