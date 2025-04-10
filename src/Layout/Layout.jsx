"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <ThemeProvider attribute={"class"} defaultTheme="class">
            <Navbar />
            {children}
        </ThemeProvider>
    )
}

export default Layout