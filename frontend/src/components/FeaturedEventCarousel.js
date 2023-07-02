import CarEventCarouselItem from "./CarEventCarouselItem";
import Styles from "./FeaturedEventCarousel.module.css"
import React, { useState } from 'react';


const FeaturedEventCarousel = ({ eventsArray }) => {
    const set = useState[eventsArray];
    return (<>
        <div className={Styles['container']}>
            <div className={Styles['carousel-container']}>
                <div className={Styles['featured-car-events']}>
                    {eventsArray.map(event => (<CarEventCarouselItem image={event.image}
                        eventName={event.name} eventLocation={event.location} />))}
                </div>
            </div>
            <div className={Styles['carousel-right-box']}>
            </div>
        </div>
    </>
    );

}
export default FeaturedEventCarousel;