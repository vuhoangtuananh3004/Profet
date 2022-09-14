import React, { useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@mui/material';

function Account() {
    const [Required, setRequired] = useState({
        emailRquired: false,
        passWordRequired: false,
    })
    const txt = "Create an account?";

    const handleRequire = (e) => {
        (e === 'email') ? setRequired({ emailRquired: true }) : setRequired({ emailRquired: false });
    }
    return (
            <div className='relative mx-auto'>
                <div className='absolute backdrop-blur-md bg-white/30 mx-auto top-[-200px] border-4 border-slate-200 rounded-[50px] w-[500px] h-[600px] text-center ml-10'>
                    <div className='text-black font-bold text-[40px] pt-10 tracking-widest'>Sign in</div>
                    <div className='text-black font-bold text-[20px] pt-5 tracking-wider'>Login for more Experiences</div>
                    <div className='flex flex-col h-full w-full p-10 mt-5' onClick={() => handleRequire('email')}>
                        <div className='flex w-[400px] h-[50px] rounded-full border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c'>
                            <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Email address'></input>
                            <EmailOutlinedIcon className='mr-5' />
                        </div>
                        {(Required.emailRquired) ? <span className='text-left text-rose-900 mt-2'>Please fill your Email</span> : <></>}
                        <div className='flex w-[400px] h-[50px] rounded-full mt-10 border border-red-900 bg-white align-center items-center hover:border-4 hover:border-#ea580c'>
                            <input className='rounded-l-full pl-10 h-full w-full outline-none' placeholder='Password'></input>
                            <LockOutlinedIcon className='mr-5' />
                        </div>
                        <button className='w-[400px] h-[50px] rounded-full mt-10 mb-10 text-[20px] bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 font-bold'>Sign in</button>
                        <span className='font-bold'>Reset your password? </span>
                        <Link href="/account/signup" className='font-bold'>{txt}</Link>

                    </div>
                </div>
            </div>
    )
}

export default Account