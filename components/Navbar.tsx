import React from 'react'
import Link from "next/link"



const Navbar = () => {
  return (
    <nav className='p-5 flex items-center justify-center gap-4'>
      <Link href='/' className="text-white">Home</Link>
      <Link href='/about' className="text-white">About</Link>
      <Link href='/contact' className="text-white">Contact</Link>
    </nav>
  )
}

export default Navbar