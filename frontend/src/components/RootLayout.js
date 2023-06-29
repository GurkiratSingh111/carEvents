import React from 'react'
import { Outlet } from 'react-router-dom'
import MainMenu from './MainMenu'
import FeaturedEventCarousel from './FeaturedEventCarousel'
import events from '../events';
import Footer from './Footer';
const RootLayout = () => {
    return (<>

        <div className="App">
            <MainMenu></MainMenu>
            <div className='remove-later'></div>
            <FeaturedEventCarousel eventsArray={events} ></FeaturedEventCarousel>
            <div className='remove-later-2'></div>
            <Footer></Footer>
        </div>
        <main>
            <Outlet />
        </main>
    </>

    )
}

export default RootLayout
