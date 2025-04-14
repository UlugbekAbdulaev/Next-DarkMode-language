import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import ficon from '@/assets/icons/Social.png'
import google from '@/assets/icons/Google Play.png'

function Footer() {
    return (
        <div className='container mx-auto mt-20 pb-20'>
            <div className='grid grid-cols-5 gap-6'>
                <div>
                    <Image src={logo} alt='logo' width={100} /><br />
                    <p className='text-[#5E6282]'>Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </div>
                <div>
                    <p className='font-bold'>Company</p> <br />
                    <p className='text-[#5E6282]'>About</p>
                    <p className='text-[#5E6282]'>Careers</p>
                    <p className='text-[#5E6282]'>Mobile</p>
                </div>
                <div>
                    <p className='font-bold'>Contact</p> <br />
                    <p className='text-[#5E6282]'>Help/FAQ</p>
                    <p className='text-[#5E6282]'>Press</p>
                    <p className='text-[#5E6282]'>Affilates</p>
                </div>
                <div>
                    <p className='font-bold'>More</p><br />
                    <p className='text-[#5E6282]'>Airlinefees</p>
                    <p className='text-[#5E6282]'>Airline</p>
                    <p className='text-[#5E6282]'>Low fare tips</p>
                </div>
                <div>
                    <Image src={ficon} alt='icon' width={150}/>
                    <p className='text-[23px] text-[#5E6282]'>Discover our app</p>
                    <div className='flex gap-5 pt-5 '>
                    <Image src={google} alt='google play' width={80}/>
                    <Image src={google} alt='google play' width={80}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer