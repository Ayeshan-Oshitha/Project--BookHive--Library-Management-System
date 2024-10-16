import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <div className='grid lg:grid-cols-12 bg-cyan-500 h-full'>
        <div className='grid lg:col-span-6 justify-center items-center'>
            Hello
        </div>
        <div className='grid lg:col-span-6'>
            World
        </div>
    </div>
    </> 
  )
}

export default Header