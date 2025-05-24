"use client"
import React from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useState } from 'react'
import { useEffect } from 'react'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

// import { , fetchpayments, initiate } from '@/actions/useractions'
// import orders from 'razorpay/dist/types/orders'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();
    const router = useRouter()
    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {

            toast.success(' Thanks for your donation!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        // router.push('/${username')
    }, [])

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
        console.log(u, dbpayments)
    }

    const pay = async (amount) => {
        const to_user = session?.user?.name;

        let a = await initiate(amount, username, paymentform);
        let orderId = a.id;

        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "deScription": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }


        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    //https://i.pinimg.com/736x/e4/a4/3b/e4a43b0db6497057949ba545f18430b7.jpg

    return (<>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />

        {/* <button id="rzp-button1">Pay</button> */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

        <div className='cover w-full relative'>
            {/* <video className=' object-cover w-full h-[350px]' src={currentuser.coverpic} autoPlay loop muted ></video> */}
            <img className=' object-cover w-full h-[200px] md:h-[350px]' src={currentuser.coverpic} alt="" />
            <div className='absolute -bottom-18 w-full flex justify-center'>
                {/* <img className='rounded-full border-2' width={150} height={150} src={currentuser.profilepic} alt="" /> */}
                <video className='rounded-full border-2' width={150} height={150} src={currentuser.profilepic} autoPlay loop muted ></video>
            </div>
        </div>
        <div className='info  text-center justify-center items-center mt-20'>
            <div className='font-bold text-lg'>
                {/* {session &&
            `@${session.user.name}`
          } */}
                @{username}
            </div>
            <div>Lets help kartikey Gehra get me a chai</div>
            <div className="text-slate-500">
                {payments.length} Payments · ₹{payments.reduce((total, payment) => total + Number(payment.amount || 0), 0).toFixed(2)} raised
            </div>

            <div className='w-full flex justify-center items-center text-left'>
                <div className='payment md:flex gap-3 space-y-5 md:space-y-0 w-full md:w-[80%] text-white my-11'>
                    <div className='supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-5 md:p-10'>
                        {/* show lisst */}
                        <h2 className='text-2xl my-5'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return (
                                    <li key={i} className='my-2 flex gap-2 items-center'>
                                        <img width={40} src="avatar.gif" alt="" />
                                        <span> {p.name} donate<span className='font-bold'> ₹.{p.amount}</span> {p.message} "I support you bro. Lots of ❤️"</span>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded- p-5 md:p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex-col space-y-2'>
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Massage' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="w-full text-white bg-gradient-to-br from-slate-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        <div className='flex gap-2 my-5 justify-evenly md:float-left '>
                            <button className='bg-slate-800 p-3 px-5 rounded-lg' onClick={() => pay(1000)}>Pay ₹.10</button>
                            <button className='bg-slate-800 p-3 px-5 rounded-lg' onClick={() => pay(2000)}>Pay ₹.20</button>
                            <button className='bg-slate-800 p-3 px-5 rounded-lg' onClick={() => pay(3000)}>Pay ₹.30</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PaymentPage