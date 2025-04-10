"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import dark from '@/assets/icons/dark.png'
import sun from '@/assets/icons/sun.png'

function DarkMode() {

    const { theme, setTheme } = useTheme()

    return (
        <div>
            <button onClick={() => {
                if (theme == "white") {
                    setTheme('dark')
                } else {
                    setTheme("white")
                }

            }}>
                {
                    theme == "white" ? <><Image src={dark} alt="dark"/></> : <><Image src={sun} alt="sun"/></>
                }
            </button>
        </div>
    )
}

export default DarkMode