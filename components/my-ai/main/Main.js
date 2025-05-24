"use client"
import React from 'react'
import './Main.css'
import { LiaCompassSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import { IoMdMic } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";

const Main = () => {
    return (<>
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src='/profile.gif' alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautifule place to see on an upcoming road trip</p>
                        <LiaCompassSolid className="img" size={35} />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <FaRegLightbulb className="img" size={35} />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <FiMessageSquare className="img" size={35} />
                    </div>
                    <div className="card">
                        <p>Improve the readablity of the following code</p>
                        <FaCode className="img" size={35} />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div >
                            <TfiGallery size={24} />
                            <IoMdMic size={24} />
                            <RiSendPlaneFill size={24}/>
                           
                        </div>
                    </div>
                    {/* <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. your privacy and Gemini Apps</p> */}
                </div>
            </div>
        </div>
    </>)
}

export default Main