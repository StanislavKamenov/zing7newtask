'use client'
import { useState } from 'react';
import Image from "next/image";
import Card1 from "../../../../public/Cards/cards1.png";
import Card2 from "../../../../public/Cards/cards2.png";
import Card3 from "../../../../public/Cards/cards3.png";

export default function Cards() {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleCardClick = (cardNumber: number) => {
        setSelectedCard(cardNumber === selectedCard ? -1 : cardNumber);
    };

    const isCardSelected = (cardNumber: number) => {
        return cardNumber === selectedCard;
    };

    return (
        <div className="bg-custom-blue mt-20 text-white md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-12 w-full min-h-screen flex flex-col items-center justify-center p-4 relative">
            <div className="max-w-md md:max-w-lg lg:max-w-xl text-center md:text-left mb-8 mt-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-4">
                    <h1 className="text-2xl ml-[-8vw] md:text-3xl lg:text-4xl font-bold mt-4 md:mt-0">Here's how Roooby can benefit your business</h1>
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <div className="max-w-sm">
                        <p className="mt-4">
                            Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:space-x-[7vw] mt-8">
                <Card
                    isSelected={isCardSelected(1)}
                    handleClick={() => handleCardClick(1)}
                    image={Card1}
                    title="Lead customers to happiness"
                    description="Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy."
                />
                <Card
                    isSelected={isCardSelected(2)}
                    handleClick={() => handleCardClick(2)}
                    image={Card2}
                    title="Support your support"
                    description="Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers."
                />
                <Card
                    isSelected={isCardSelected(3)}
                    handleClick={() => handleCardClick(3)}
                    image={Card3}
                    title="Grow without growing pains"
                    description="Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow."
                />
            </div>
        </div>
    );
}

function Card({ isSelected, handleClick, image, title, description }: { isSelected: boolean, handleClick: () => void, image: any, title: string, description: string }) {
    return (
        <div className={`max-w-md md:max-w-xs md:mr-8 mb-8 md:mb-0 text-center md:text-left w-full md:w-[374px] h-[439px] rounded-[1vw] ${isSelected ? 'scale-105 transition-transform duration-500 bg-custom-yellow' : ''}`} onClick={handleClick}>
            <div className="text-left">
                <Image src={image.src} alt="Card Image" width={63} height={72} className='ml-4 mt-[3vw]' />
                <div className="ml-4 mr-auto h-0.5 mt-[3vw] w-[90%] bg-white"></div>
                <div className={`text-${isSelected ? 'black' : 'white'} flex flex-col justify-center pl-4`}>
                    <p className='text-2xl font-bold w-[10vw] mt-[1vw]'>{title}</p>
                    <div className="w-full">
                        <p className='center mt-[2vw] w-[260px] h-[104px]'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}