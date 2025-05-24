"use client"
import React from 'react'
import './Sidebar.css'
import { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {

    const [extended, setextended] = useState(false)
    return (<>
        <div className='sidebar'>
            <div className="top">
                <div className='menu img' onClick={() => { setextended(prev => !prev) }}><RiMenu2Line size={20} color='black' /></div>
                <div className="new-chat">
                    <div className='img'><FaPlus size={20} /></div>
                    {extended ? <p>New Chat</p> : null}
                </div>

               {extended ? <div className="recent">
                    <p className='recent-title'>Recent</p>
                    <div className="recent-entry">
                        <div className='img'><FaRegMessage size={20} /></div>

                        <p>What is react ...</p>
                    </div>
                </div> : null }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <div className="img"><AiOutlineQuestionCircle size={20} /></div>
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <div className="img"><FaClockRotateLeft size={20} /></div>
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <div className='img'><MdOutlineSettings size={20} /></div>
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    </>)
}

export default Sidebar