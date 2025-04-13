"use client"
import { ThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

function Layout({ children }) {

    const [state, setstate] = useState(false)
    useEffect(() => {
        setstate(true)

    });
    if (!state) return null;

    return (
        <ThemeProvider attribute={"class"} defaultTheme="class">
            <Navbar />
            {children}
        </ThemeProvider>
    )
}

export default Layout