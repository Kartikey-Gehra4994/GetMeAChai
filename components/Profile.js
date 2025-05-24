"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Profile = () => {

  return (<></>
    // <div>
    //   <div className='cover w-full relative'>
    //     <video className=' object-cover w-full h-[350px]' src='/pfcover.mp4' autoPlay loop muted ></video>
    //     <div className='absolute -bottom-18 w-full flex justify-center'>
    //       <img className='rounded-full border-2' width={150} height={150} src="https://img.freepik.com/premium-photo/smiling-sloth-with-smile-its-face_854727-49026.jpg" alt="" />
    //     </div>
    //   </div>
    //   <div className='info  text-center justify-center items-center mt-20'>
    //     <div className='font-bold text-lg'>
    //       {session &&
    //         `${session.user.name}`
    //       }
    //     </div>
    //     <div>Creating Animated art for VTT's</div>
    //     <div className='text-slate-500'>17,596 members . 97 Posts . $17,920/release</div>
    //     <div className='w-full flex justify-center items-center text-left'>
    //       <div className='payment flex gap-3 w-[80%] text-white my-11'>
    //         <div className='supporters w-1/2 bg-slate-900 rounded-lg p-10'>
    //           {/* show lisst */}
    //           <h2 className='text-2xl my-5'>Supporters</h2>
    //           <ul className='mx-5 text-lg'>
    //             <li className='my-2 flex gap-2 items-center'>
    //               <img width={40} src="avatar.gif" alt="" />
    //               <span> subham donate<span className='font-bold'> $30</span> with a message "I support you bro. Lots of ❤️"</span></li>
    //             <li className='my-2 flex gap-2 items-center'>
    //               <img width={40} src="avatar.gif" alt="" />
    //               <span> subham donate<span className='font-bold'> $30</span> with a message "I support you bro. Lots of ❤️"</span></li>
    //             <li className='my-2 flex gap-2 items-center'>
    //               <img width={40} src="avatar.gif" alt="" />
    //               <span> subham donate<span className='font-bold'> $30</span> with a message "I support you bro. Lots of ❤️"</span></li>
    //             <li className='my-2 flex gap-2 items-center'>
    //               <img width={40} src="avatar.gif" alt="" />
    //               <span> subham donate<span className='font-bold'> $30</span> with a message "I support you bro. Lots of ❤️"</span></li>
    //           </ul>
    //         </div>
    //         <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
    //           <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
    //           <div className='flex-col space-y-2'>
    //             <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
    //             <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Massage' />
    //             <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
    //             <button type="button" class="w-full text-white bg-gradient-to-br from-{black} to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
    //           </div>
    //           <div className='flex gap-2 my-5'>
    //             <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
    //             <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
    //             <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Profile
