import React from 'react'
import Image from 'next/image'
import String from '../../../../public/string.png'
import Customer1 from '../../../../public/customer1.png'
import Customer2 from '../../../../public/customer2.png'
import Customer3 from '../../../../public/customer3.png'

export default function customers() {
    return (
        <div className='py-16 overflow-x-hidden'>
            <div className='text-5xl font-bold'>
                <p>We love our Customers and They love us too</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='w-[360px] h-[371px] m-4'>
                    <Image src={String} alt='' />
                    <div className="h-0.5 w-[300px] bg-custom-grey2 mt-3"></div>
                    <p className='w-[300px]'>The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.</p>
                    <Image src={Customer1} alt='' className='py-10' />
                </div>
                <div className='w-[360px] h-[371px] m-4'>
                    <Image src={String} alt='' />
                    <div className="h-0.5 w-[300px] bg-custom-grey2 mt-3"></div>
                    <p className='w-[300px]'>It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.</p>
                    <Image src={Customer2} alt='' className='py-10' />
                </div>
                <div className='w-[360px] h-[371px] m-4'>
                    <Image src={String} alt='' />
                    <div className="h-0.5 w-[300px] bg-custom-grey2 mt-3"></div>
                    <p className='w-[300px]'>Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!</p>
                    <Image src={Customer3} alt='' className='py-16' />
                </div>
            </div>
        </div>
    )
}
