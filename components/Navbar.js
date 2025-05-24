"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (

    <nav className='bg-gray-900 text-white flex justify-between px-4 items-center h-16 '>

      <Link href={'/'} className='logo font-bold text-lg flex items-center justify-center gap-2 '>
        <img src="/tea.gif" className='w-[30px]' alt="" />
        <span>GetMeAChai</span>
      </Link>

      <div className='relative flex justify-center items-center '>
        {session && <div className="relative inline-block text-left">
          <button onClick={toggleDropdown} onBlur={() => { setTimeout(() => { toggleDropdown(false) }, 200) }}
            className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 md:w-fit w-[200px] md:px-5 py-1.5 md:py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button" >
            Welcome {session.user.email}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute md:left-[110px] z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/my-ai" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    MY-ai
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link onClick={() => { signOut() }} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>}

        <div className='mt-2.5'>
          {/* {session &&
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }}>Logout</button>} */}

          {!session && <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>}
        </div>

      </div>
    </nav>
  )
}
export default Navbar

