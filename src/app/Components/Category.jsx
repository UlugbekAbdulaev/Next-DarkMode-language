import Image from 'next/image'
import React from 'react'
import g1 from '@/assets/icons/Group1.png'
import g2 from '@/assets/icons/Group2.png'
import g3 from '@/assets/icons/Group3.png'
import g4 from '@/assets/icons/Group4.png'
import pos from '@/assets/icons/pos.png'
function Category() {
    return (
        <div className='container mx-auto relative'>
            <div className='text-center'>
                <p>CATIGORY</p>
                <p className='font-bold text-4xl'>We Offer Best Services</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-[300px] pt-15 px-15 flex flex-col justify-center items-center'>
                    <Image src={g1} alt='category foto' /><br />
                    <p className='font-medium'>Calculated Weather </p><br />
                    <p className='text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className='w-[300px] px-15 flex flex-col items-center shadow rounded-4xl z-20 bg-white pb-5 mt-3 dark:bg-gray-900'>
                    <Image src={g2} alt='category foto' />
                    <p className='font-medium'>Best Flights</p><br />
                    <p className='text-[#5E6282]'>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div className='w-[300px] pt-10 px-15 flex flex-col justify-center items-center'>
                    <Image src={g3} alt='category foto' />
                    <p className='font-medium pt-4'>Local Events</p><br />
                    <p className='text-[#5E6282]'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
                <div className='w-[300px] pt-10 px-15 flex flex-col justify-center items-center'>
                    <Image src={g4} alt='category foto' />
                    <p className='font-medium pt-4'>Customization</p><br />
                    <p className='text-[#5E6282]'>We deliver outsourced
                        aviation services for
                        military customers</p>
                </div>
            </div>
            <div className='absolute -bottom-12 left-72 z-10'><Image src={pos} alt='position foto'/></div>
        </div>
    )
}

export default Category