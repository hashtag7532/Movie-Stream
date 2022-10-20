import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from "next/link"
import Genre from "../components/Genre.js"

function NavbarMovies() {
  return (
    <div className='flex flex-row justify-between'>
        <div className='mt-5 ml-10'>CineSnob</div>
        <div className='mr-10 mt-5'>
            <ul className='flex flex-row'>
                <li className='mr-10'>
                    <Genre />
                </li>
                <li>
                    <Link href="/search"><a><SearchOutlinedIcon /></a></Link>
                </li>
                <li className='ml-10'>
                    <Link href="/profile"><a><AccountCircleIcon /></a></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarMovies;