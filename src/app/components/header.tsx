import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <>
     
  <header className="text-gray-600 body-font  bg-gray-900">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href = {"/"}  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span className="ml-3 text-xl text-white">Blog<span className='text-indigo-500'>Website</span></span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        
        
        <Link href = {"/"} className="mr-5 text-white hover:text-gray-500">Blogs</Link>
        <Link href = {"https://github.com"} target="_blank" className="mr-5 text-white hover:text-gray-500"><FaGithub /></Link>
      </nav>
      
    </div>
  </header>


      </>
    </div>
  )
}

export default Header
