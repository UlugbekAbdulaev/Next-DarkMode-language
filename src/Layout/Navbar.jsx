// "use client"
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import decor from '@/assets/images/decor.png'
import decor2 from '@/assets/images/decor2.png'
import DarkMode from './DarkMode'
import { useTheme } from 'next-themes'
import { redirect, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

function Navbar() {

    const path = usePathname()
    const { theme } = useTheme()
    const locale = useLocale()

    const switchlang = (params) => {
        redirect({ locale: params?.target?.value, href: path })
    }

    return (
        <div>
            <div className='container mx-auto flex gap-32 py-10 font-bold'>
                <div className='dark:bg-gray-400 px-2 py-1 rounded-xl'>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='flex justify-between items-center gap-22 relative'>
                    <p>Desitnations</p>
                    <p>Hotels</p>
                    <p>Flights</p>
                    <p>Bookings</p>
                    <DarkMode />
                    <button className='border px-2 py-1 rounded-lg w-[100px]'>sign up</button>
                    <select onChange={switchlang} value={locale}>
                        <option value="en" >EN</option>
                        <option value="uz"  >UZ</option>
                    </select>
                    <div className='absolute -top-10 -right-10 -z-10'>
                        {
                           
                            theme === "dark" ? <Image src={decor2} alt='decor2' width={700} height={530} /> :
                                              <Image src={decor} alt='decor' width={700} height={530}/>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar