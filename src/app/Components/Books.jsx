import Image from 'next/image'
import React from 'react'
import icon1 from '@/assets/icons/aicon.png'
import icon2 from '@/assets/icons/aicon2.png'
import icon3 from '@/assets/icons/aicon3.png'
import rfoto from '@/assets/images/aright.png'
import amfoto from '@/assets/images/amright.png'
import { useTranslations } from 'next-intl'

function Books() {
    const t = useTranslations()
    return (
        <div className='container mx-auto grid grid-cols-2 gap-16'>
            <div className='col-span-1 '>
                <p className='mb-6 mt-6 text-[#5E6282] font-bold'>Easy and Fast</p>
                <p className='font-bold text-[66px] leading-20 mb-6'>{t("book")}</p>
                <div className='flex items-center gap-4'><Image src={icon1} alt='sus' />
                    <p className='font-bold text-[#5E6282]'>Choose Destination <br /> <span className='font-normal pr-32'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus.</span> </p>
                </div>
                <div className='flex items-center mt-6 mb-6 gap-4'><Image src={icon2} alt='sus' />
                    <p className='font-bold text-[#5E6282]'>Make Payment <br /> <span className='font-normal pr-32'> Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus.</span> </p>
                </div>
                <div className='flex items-center gap-4'><Image src={icon3} alt='sus' width={65} height={65} />
                    <p className='font-bold text-[#5E6282]'>Reach Airport on Selected Date <br /> <span className='font-normal pr-32'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus.</span> </p>
                </div>
            </div>
            <div className='col-span-1 flex flex-col justify-center relative pt-30'>
                <div className='px-4 py-8 border border-gray-200 rounded-2xl w-[352px] shadow shadow-blue-500'>
                    <Image src={rfoto} alt='woman commit foto' width={350} height={250} />
                    <p className='text-2xl'>Trip To Greece</p>
                    <p className='text-[#5E6282] w-full'>14-29 June|  by Robbin joseph</p> <br />
                    <p className='text-[#5E6282]'>24 people going</p>

                    <div className='absolute right-40 top-4/6 flex bg-white rounded-2xl shadow-2xl border-gray-100'>
                        <div className=' p-5 bg-white pr-5'>
                            <Image src={amfoto} alt='mechet' />
                        </div >
                        <div >
                            <p>Ongoing</p>
                            <p>Trip to rome</p>
                            <p>40% completed</p>
                            <div className='w-[100px] h-1 bg-[#8A79DF] rounded-3xl my-3'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Books