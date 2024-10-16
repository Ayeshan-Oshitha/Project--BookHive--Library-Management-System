import React from 'react'
import Logo from '../../assets/icons/main/logo.svg'

type Props = {}

const Login = (props: Props) => {
    return (
        <>
            <div className=' flex flex-col items-center px-8  sm:max-w-[450px] lg:px-6 text-center mt-6 lg:mt-10' >
                <img src={Logo} className='w-40 ' />
                <p className='text-4xl  mt-4'>Sign in with your BookHive Login</p>
                <p className='text-base  mt-6'>Sign in with your BookHive exisiting account  <span className='hidden sm:inline'><br /></span> or create a new Account</p>

                <form className='mt-8'>

                    <label htmlFor="email" className='font-semibold tracking-wider'> Email or mobile phone number </label>
                    <input
                        type='text'
                        id='name' name='email'
                        placeholder='Your email or phone number'
                        className='border-2  border-[#cccccc] w-full h-10 rounded-lg px-2 text-sm mt-1 mb-5' />

                    <label htmlFor="email" className='font-semibold tracking-wider '> Password </label>
                    <input
                        type='Password'
                        id='' name=''
                        placeholder='Password'
                        className='border-2  border-[#cccccc] w-full h-10 rounded-lg px-2 text-sm mt-1 mb-1' />
                    <p className='text-sm text-[#4F90CB] font-medium'>Need help signing in?</p>

                    <button className='bg-[#FFEB0D] hover:bg-[#fff04d]  w-full h-8 font-semibold mt-4 rounded-lg'>Sign in</button>

                    <p className='mt-5 text-sm '> By continuing, You are agree to BookHive’s<span className='hidden sm:inline'><br /></span> <span className='text-[#4F90CB] underline font-medium cursor-pointer'> Terms of Use. </span>  You can find the privacy notice that <span className='hidden sm:inline'><br /></span> applies to you <span className='text-[#4F90CB] underline font-medium cursor-pointer'> here. </span></p>

                    <div className='flex flex-row justify-center mt-5 gap-x-4'>
                        <input type="checkbox" id="" name="" value="" className='w-5' />
                        <label htmlFor="" className="text-sm"> Keep me Signed in. <span className='text-[#4F90CB] underline font-medium cursor-pointer'> Details </span> </label>
                    </div>
                </form>

                <div className="flex items-center justify-center mt-10 w-full">
                    <div className="flex-grow  border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-400">New to BookHive?</span>
                    <div className="flex-grow  border-t border-gray-300"></div>
                </div>

                <button className=' w-full h-8 border-2 border-[#cccccc] hover:bg-[#cccccc] font-semibold mt-4 rounded-lg text-sm'>Create your BookHive Account</button>

            </div>

        </>
    )
}

export default Login