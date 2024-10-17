import React from 'react'
import LoginFooter from '../components/login/LoginFooter'
import DetailSection from '../components/login/Details'
import Registration from '../components/login/Registration'

type Props = {}

const RegistrationPage = (props: Props) => {
  return (
    <>
     <div className='grid grid-cols-12 h-screen'>
                <div className='grid col-span-12 lg:col-span-5 bg-[#FFEB0D] order-2 lg:order-1'>
                    <DetailSection />
                </div>
                <div className='grid col-span-12  lg:col-span-7  order-1 lg:order-2'>
                    <div className='flex flex-col items-center'>
                      <Registration />
                      <LoginFooter/>
                      </div>
                </div>
            </div>
    </>
  )
}

export default RegistrationPage