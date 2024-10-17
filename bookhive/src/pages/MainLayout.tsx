import React from 'react'
import Header from '../components/main/Header'
import SideBar from '../components/main/SideBar'
import Home from '../components/main/Home'
import Footer from '../components/main/Footer'
import { Outlet } from 'react-router'

type Props = {}

const MainLayout = (props: Props) => {

    return (
        <>
            <div className='flex flex-col '>
                {/* Header */}
                <header className='w-full h-20'>
                    <Header />
                </header>

                {/* Main content (flex-grow ensures this section expands to fill remaining space) */}
                <div className='flex-grow flex'>
                    <aside className='w-0 sm:w-44 lg:w-52 bg-pink-500'>
                        <SideBar />
                    </aside>
                    <main className=' w-full bg-orange-600'>
                        <Home />
                    </main>
                </div>

                {/* Footer */}
                <footer className='w-full bg-yellow-400 h-20'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default MainLayout