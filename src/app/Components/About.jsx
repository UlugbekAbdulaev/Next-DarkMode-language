import prof from '@/assets/images/Image.png'
import Image from 'next/image'
import rek1 from '@/assets/images/image 27.png'
import rek2 from '@/assets/images/image 28.png'
import rek3 from '@/assets/images/Group 29.png'
import rek4 from '@/assets/images/image 30.png'
import rek5 from '@/assets/images/image 31.png'
import { useTranslations } from 'next-intl'

function About() {
    const t=useTranslations()
    return (
        <div className='container mx-auto '>
            <div className='grid grid-cols-2 mt-35'>
                <div>
                    <p className='pb-7 text-gray-600 font-bold text-[23px]'>Testimonials</p>
                    <p className='text-6xl font-bold'>{t("people")}</p>
                </div>
                <div className='relative mt-10 shadow-2xl'>
                    <div className='absolute -top-16 -left-12 '><Image src={prof} alt='profil foto' /></div>
                    <p className='w-96 mt-8 ml-6'>
                        “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                    </p><br />
                    <p className='ml-6'>Mike taylor</p>
                    <p className='ml-6'>Lahore, Pakistan</p>
                </div>
            </div>

            <div className='flex justify-center items-center '>
                <Image src={rek1} alt='reklama' />
                <Image src={rek2} alt='reklama' />
                <div className='pt-48'><Image src={rek3} alt='reklama' /></div>
                <Image src={rek4} alt='reklama' />
                <Image src={rek5} alt='reklama' />
            </div>

            <div className=' bg-[#F9F6Fe] text-center px-20 py-10 rounded-tl-4xl'>
                <h1 className='text-[43px] font-medium text-[#5E6282]'>{t("sub")}</h1>

                   <div className='mt-10'>
                   <input type="email" placeholder='Your email' className='bg-white w-[300px] h-[50px] px-5 py-2 rounded-lg'/> <button className='bg-[#FF7D68] text-white px-5 py-2 rounded-lg' >Subscribe</button>
                   </div>
            </div>
        </div>
    )
}

export default About