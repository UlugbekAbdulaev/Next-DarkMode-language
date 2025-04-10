
import play from '@/assets/images/Play.png'
import Image from 'next/image'
import mainfoto from '@/assets/images/mainfoto.png'
import { useTranslations } from 'next-intl'


function Main() {
const t = useTranslations()

    return (
        <div className='container mx-auto grid grid-cols-2'>
            <div className='col-span-1 pt-15'>
                <p className=' text-[#DF6951] text-3xl'>{t("best")}</p>
                <p className='font-bold text-[#181E4B] text-8xl w-[700px] dark:text-gray-100 tracking-tighter'>{t('travel')}</p>
                <p className='text-[#5E6282] py-5 text-2xl'>{t("build")}</p>

                <div className='flex items-center'>
                    <button className='border px-2 py-1 rounded-lg bg-[#F1A501] text-white mr-10'>Find out more</button>
                     <div className='pt-5'><Image src={play} width={80} height={30} alt='play icon' /></div> <span>Play Demo</span>
                </div>
            </div>
            <div className='col-span-1'>
                <Image src={mainfoto} alt='main foto'/>
            </div>
        </div>
    )
}

export default Main