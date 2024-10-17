import React from 'react'
import Logo from '../../assets/icons/main/logo.svg'
import FacebookIcon from '../../assets/icons/login/Facebook.svg'
import GoogleIcon from '../../assets/icons/login/Google.svg'

type Props = {}

const Registration = (props: Props) => {
    return (
        <>

            <div className=' flex flex-col items-center px-8  sm:max-w-[450px] lg:px-6 text-center mt-6 lg:mt-10' >
                <img src={Logo} className='w-40 ' />
                <p className='text-4xl  mt-4'>Create Account</p>

                <form className='mt-8'>

                    <label htmlFor="email" className='font-medium tracking-wide'> Your Name </label>
                    <input
                        type='text'
                        id='name' name='email'
                        placeholder='Your email or phone number'
                        className='border-2  border-[#cccccc] w-full h-9 rounded-lg px-2 text-sm  mb-3' />

                    <label htmlFor="email" className='font-medium tracking-wide'> Email </label>
                    <input
                        type='text'
                        id='name' name='email'
                        placeholder='Your email or phone number'
                        className='border-2  border-[#cccccc] w-full h-9 rounded-lg px-2 text-sm  mb-3' />

                    <label htmlFor="email" className='font-medium tracking-wide '> Password </label>
                    <input
                        type='Password'
                        id='' name=''
                        placeholder='Password'
                        className='border-2  border-[#cccccc] w-full h-9 rounded-lg px-2 text-sm ' />
                        <p className='text-xs text-gray-400 font-normal mb-3'>Password must be atleast 8 characters</p>

                    <label htmlFor="email" className='font-medium tracking-wide '> Re-Enter Passowrd </label>
                    <input
                        type='Password'
                        id='' name=''
                        placeholder='Password'
                        className='border-2  border-[#cccccc] w-full h-9 rounded-lg px-2 text-sm  mb-1' />


                    

                    <button className='bg-[#FFEB0D] hover:bg-[#fff04d]  w-full h-8 font-semibold mt-4 rounded-lg'>Create your BookHive Account</button>

                    <div className="flex items-center justify-center mt-6 w-full">
                        <div className="flex-grow  border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-400">Or sign up with</span>
                        <div className="flex-grow  border-t border-gray-300"></div>
                    </div>

                    <div className='flex flex-row justify-center gap-x-8 mt-3'>
                        <img src={GoogleIcon} className='w-9 cursor-pointer ' />
                        <img src={FacebookIcon} className='w-9 cursor-pointer' />
                    </div>

                    <p className='mt-7 text-sm '> By continuing, You are agree to BookHive’s<span className='hidden sm:inline'><br /></span> <span className='text-[#4F90CB] underline font-medium cursor-pointer'> Terms of Use. </span>  You can find the privacy notice that <span className='hidden sm:inline'><br /></span> applies to you <span className='text-[#4F90CB] underline font-medium cursor-pointer'> here. </span></p>

                </form>

                <div className="flex items-center justify-center mt-10 w-full">
                    <div className="flex-grow  border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-400">Already Have an Account ?</span>
                    <div className="flex-grow  border-t border-gray-300"></div>
                </div>

                <button className=' w-full h-8 border-2 border-[#cccccc] hover:bg-[#cccccc] font-semibold mt-4 rounded-lg text-sm'>Sign in</button>

            </div>

        </>
    )
}

export default Registration