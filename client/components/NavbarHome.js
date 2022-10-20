import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import logo from "../public/images/CineSnob-logos_white.png"

function NavbarHome() {
  return (
    <div className='flex flex-row justify-between pt-4'>
        <div className='ml-[100px]'>
            <h1 className='bolder text-[40px]'>CineSnob</h1>
        </div>
        <div className='mr-[100px]'>
        <Link href="/movies"><a><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Log In/Sign Up</button></a></Link>
        </div>
    </div>
  )
}

export default NavbarHome