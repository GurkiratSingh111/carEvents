import {FiSearch, FiUser} from 'react-icons/fi'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import {RiArrowDownSFill} from 'react-icons/ri'

import Styles from './MainMenu.module.css';
const MainMenu = () =>{
    return(
        <nav className={Styles['main-menu']}>
            <div className={Styles["menu-logo"]}>Logo</div>
            <div className={Styles["menu-page-links"]}>
                <ul>
                    <li className={Styles['menu-link-item']}><a href="#"><RiArrowDownSFill className={Styles['main-menu-arrow-down']}/>Catagories</a></li>
                    <li className={Styles['menu-link-item']}><a href="#">Reviews</a></li>
                    <li className={Styles['menu-link-item']}><a href="#">Special bundles</a></li>
                    <li className={Styles['menu-link-item']}><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div className={Styles["menu-user-links"]}>
                <ul>
                    <li className={Styles['menu-link-item']}><a href="#"><FiSearch/></a></li>
                    <li className={Styles['menu-link-item']}><a href="#"><FiUser/></a></li>
                    <li className={Styles['menu-link-item']}><a href="#"><LiaShoppingBagSolid/></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default MainMenu;