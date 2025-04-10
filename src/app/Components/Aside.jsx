import Image from 'next/image'
import React from 'react'
import r1 from '@/assets/images/r1.png'
import r2 from '@/assets/images/r2.png'
import r3 from '@/assets/images/r3.png'

function Aside() {
    return (
        <div className='container mx-auto mt-32 '>
            <div className='text-center'><p>Top Selling</p>
                <p className='font-bold text-4xl'>Top Destinations</p>
            </div>
            <div className='grid grid-cols-3 py-10 pl-12'>

                <div className='rounded-3xl overflow-hidden col-span-1 w-[360px] shadow border-b-1 border-gray-300 text-gray-500 pb-5'>
                    <Image src={r1} alt='city' /><br />
                    <div className='flex justify-between px-10'>
                        <p>Rome, Italty</p>
                        <p>$5,42k</p>
                    </div><br />
                    <div className='px-16'>
                        <p >10 Days Trip</p>
                    </div>
                </div>

                <div className='rounded-3xl overflow-hidden col-span-1 w-[348px] shadow border-b-1 border-gray-300 text-gray-500 pb-5'>
                    <Image src={r2} alt='city' width={350}/><br />
                    <div className='flex justify-between px-10'>
                        <p>Rome, Italty</p>
                        <p>$5,42k</p>
                    </div><br />
                    <div className='px-16'>
                        <p >10 Days Trip</p>
                    </div>
                </div>

                <div className='rounded-3xl overflow-hidden col-span-1 w-[348px] shadow border-b-1 border-gray-300 text-gray-500 pb-5'>
                    <Image src={r3} alt='city' width={350} /><br />
                    <div className='flex justify-between px-10'>
                        <p>Rome, Italty</p>
                        <p>$5,42k</p>
                    </div><br />
                    <div className='px-16'>
                        <p >10 Days Trip</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aside