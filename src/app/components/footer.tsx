import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
  
  <footer className="text-gray-600 body-font bg-gray-900">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href = {"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl text-white">Blog<span className='text-indigo-500'>Website</span></span>

      </Link>
      <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2025
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href = {"https://www.facebook.com"} target="_blank" className="text-gray-200">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
       </Link>
       
        
        <Link href = {"https://www.linkedin.com"} target="_blank" className="ml-3 text-gray-200">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
       </Link>
      </span>
    </div>
  </footer>

    </div>
  )
}



export default Footer
