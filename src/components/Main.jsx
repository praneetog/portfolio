import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram,FaTwitter,FaFacebookF,FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1793&q=80" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Praneet Kashyap</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
                    sequence={[
                    'Student',
                    1500,
                    'Coder',
                    1500,
                    'Developer',
                    1500,
                    ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px'}}
                repeat={Infinity}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <a href="https://x.com/praneet_K10?t=EqWgLxa43bT1Sx3ntllLVw&s=09">
                    <FaTwitter size={20} className='cursor-pointer hover:scale-110'/>
                </a>
                <a href="https://instagram.com/praneet_084?igshid=OGQ5ZDc2ODk2ZA==">
                    <FaInstagram size={20} className='cursor-pointer hover:scale-110'/>
                </a>
                    <FaFacebookF size={20} className='cursor-pointer hover:scale-110'/>
                <a href="https://www.linkedin.com/in/praneet-kashyap-2854a824b">
                    <FaLinkedin size={20} className='cursor-pointer hover:scale-110'/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main