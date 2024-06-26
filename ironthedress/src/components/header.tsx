"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [open, isOpen] = useState(false)
    const Toggle = () => {
        isOpen(!open)
    }

    return (
        <nav className='flex justify-between items-center py-5 sticky px-10 bg-black'>
                <Link href="/">
                    <h1 className='text-lg md:text-4xl font-bold text-white'>IronTheDress</h1>
                </Link>
                <Link href="/iron-space" className='rounded bg-white text-black px-2 py-2 sm:px-4'>
                    <h1>
                        IronSpace
                    </h1>
                </Link>
        </nav>
    )
}

export default Header
