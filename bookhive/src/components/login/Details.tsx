import React from 'react'
import PeopleIcon from '../../assets/icons/login/People.svg'
import BookIcon from '../../assets/icons/login/Books.svg'
import UpdateIcon from '../../assets/icons/login//Update.svg'
import SwitchIcon from '../../assets/icons/login/Switch.svg'

type Props = {}

const Details = (props: Props) => {
  return (
    <>
    <div className=' flex flex-col pl-4 sm:pl-12 pr-10 lg:pl-12 lg:pt-4 lg:pr-8 xl:pr-8 sm:max-w-[800px] lg:max-w-[500px]'>
        <p className=' mt-14 text-[#303030] text-5xl font-extrabold'>Why BookHive?</p>

        <div className='flex flex-col gap-y-6 mt-8 '>
        <div className=' flex flex-row'>
            <div className='w-20'>
                    <img src={PeopleIcon} className='w-14' />
            </div>
            <div className='w-full flex flex-col flex-wrap mt-3 ml-7 text-[#303030]'>
                <p className=' text-2xl font-semibold'>Community of readers</p>
                <p className='mt-1 text-xs font-normal'>BookHive represents a thriving community of readers and authors, just like bees in a hive, working together to create a rich library of knowledge and stories.</p>
            </div>
        </div>

        <div className=' flex flex-row'>
            <div className='w-20'>
                    <img src={SwitchIcon} className='w-14' />
            </div>
            <div className='w-full flex flex-col flex-wrap mt-3 ml-7 text-[#303030]'>
                <p className=' text-2xl font-semibold'>Collaborative Space</p>
                <p className='mt-1 text-xs'>Just as bees collaborate to create something greater, "BookHive" is a space where authors, readers, and librarians come together to share and grow their love for literature.</p>
            </div>
        </div>

        <div className=' flex flex-row'>
            <div className='w-20'>
                    <img src={BookIcon} className='w-14' />
            </div>
            <div className='w-full flex flex-col flex-wrap mt-3 ml-7 text-[#303030]'>
                <p className=' text-2xl font-semibold'>Sweet Selection</p>
                <p className='mt-1 text-xs'>Like honey in a hive, our platform offers a sweet selection of books, catering to diverse tastes and preferences, making it a delightful place for all book lovers.</p>
            </div>
        </div>

        <div className=' flex flex-row'>
            <div className='w-20'>
                    <img src={UpdateIcon} className='w-14' />
            </div>
            <div className='w-full flex flex-col flex-wrap mt-3 ml-7 text-[#303030]'>
                <p className=' text-2xl font-semibold'>Buzzing with Activity</p>
                <p className='mt-1 text-xs'>"BookHive" is always buzzing with new releases, author events, and community discussions, creating an active and engaging environment for everyone involved.</p>
            </div>
        </div>

        <div className=' justify-end flex mt-6 mb-8'>
            <button className=' bg-white px-4 py-2 text-[#303030] hover:text-white font-semibold rounded-xl hover:bg-[#303030]'>Learn More</button>
        </div>
        </div>

    </div>
    </>
  )
}

export default Details