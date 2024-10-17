import React from 'react'

type Props = {}

const LoginFooter = (props: Props) => {
  return (
    <div className=' flex flex-col justify-center px-8 sm:w-4/5  lg:px-6 text-center mt-6' >
        <div className='w-full border border-gray-300 mt-4'></div>
      <div className='flex flex-row flex-wrap justify-center backdrop:gap-x-4 text-sm text-[#4F90CB] gap-4 mt-5'>
            <p className='pointer'> BookHive Terms and Conditions </p>
            <p className='pointer'> Conditions of Use </p>
            <p className='pointer'> Privacy Terms </p>
            <p className='pointer'> Help </p>
      </div>
      <p className='text-sm mt-4 mb-6'>© 2024 - 2025, BookHive.com </p>
    </div>
  )
}

export default LoginFooter