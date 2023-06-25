import React from 'react'
import { BsFacebook, BsFillBalloonHeartFill } from "react-icons/bs"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"



const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center items-center gap-2 p-2 pb-3 mt-6'>
        <div className='flex gap-4'>
            <a href=""><BsFacebook className=' text-[1.5rem]' /></a>
            <a href=""><AiFillInstagram className=' text-[1.5rem]' /></a>
            <a href=""><AiFillYoutube className=' text-[1.5rem]' /></a>
        </div>
        <p className='flex items-center text-sm mt-1'>made with <BsFillBalloonHeartFill className='text-red-600'/> by Max Lee</p>
    </footer>
  )
}

export default Footer