"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    document.title = "Login - Get Me A Chai"
    if (session) {
      router.push('/dashboard');
    }

  }, [session, router])

  return (
    <div className='text-white py-14 container mx-auto'>
      <h1 className=' font-bold text-3xl text-center'>Login to Get started</h1>

      <div className="flex flex-col gap-2 min-h-screen md:p-10">

        <div
          id="login-popup"
          tabIndex={-1}
          className="flex justify-center"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close popup</span>
              </button>

              <div className="p-5">
                <div className="text-center">
                  <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    Login to your account
                  </p>
                  <p className="mt-2 text-sm leading-4 text-slate-600">
                    You must be logged in to perform this action.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-2">
                  <button onClick={() => { signIn("github") }} className="cursor-pointer inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                      src="https://www.svgrepo.com/show/512317/github-142.svg"
                      alt="GitHub"
                      className="h-[18px] w-[18px]"
                    />
                    Continue with GitHub
                  </button>

                  <button className="cursor-pointer inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="h-[18px] w-[18px]"
                    />
                    Continue with Google
                  </button>

                  <button className="cursor-pointer inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                      src="https://www.svgrepo.com/show/448234/linkedin.svg"
                      alt="LinkedIn"
                      className="h-[18px] w-[18px]"
                    />
                    Continue with LinkedIn
                  </button>
                </div>

                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                  <div className="h-px w-full bg-slate-200" />
                  OR
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <form className="w-full">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Email Address"
                  />
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Password"
                  />
                  <p className="mb-3 mt-2 text-sm text-gray-500">
                    <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">
                      Reset your password?
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                  >
                    Continue
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                  Don't have an account?
                  <a href="/signup" className="font-medium text-[#4285f4]">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Login

