import React from 'react'
import myPhoto from "../public/images/CineSnob-logos_transparent.png"
import Image from 'next/image'
import "../data"

function Card(props) {
  return (
    <div className='w-[300px] border border-sky-500'>
        <div>
            <Image src={props.coverImg} alt="Movie photo" width={200} height={150} />
        </div>
        <div>
            <h1>{props.title}</h1>
            <p>{props.rating}</p>
            <p>{props.duration}</p>
        </div>
    </div>
  )
}

export default Card