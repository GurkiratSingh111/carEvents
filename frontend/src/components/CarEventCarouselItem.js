import Styles from "./CarEventCarouselItem.module.css"
import {MdOutlineLocationOn} from "react-icons/md"
import {PiCarSimpleBold} from "react-icons/pi"
const CarEventCarouselItem = ({image , eventName , eventLocation}) => {
    return(
        <div className={Styles["event-carousel-item"]}>
            <img className={Styles["event-carousel-item-image"]} src={ `assets/images/${image}`} alt={`${eventName} image`}></img>
            <p><PiCarSimpleBold/> {eventName}</p>
            <p><MdOutlineLocationOn/> {eventLocation}</p>
        </div>
    );
}
export default CarEventCarouselItem;