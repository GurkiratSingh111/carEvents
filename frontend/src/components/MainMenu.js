import { FiSearch, FiUser } from 'react-icons/fi'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { RiArrowDownSFill } from 'react-icons/ri'

import Styles from './MainMenu.module.css';
import { Link } from 'react-router-dom';
const MainMenu = () => {
    return (
        <nav className={Styles['main-menu']}>
            <div className={Styles["menu-logo"]}>Logo</div>
            <div className={Styles["menu-page-links"]}>
                <ul>
                    <li className={Styles['menu-link-item']}><Link to="/categories"><RiArrowDownSFill className={Styles['main-menu-arrow-down']} />Categories</Link></li>
                    <li className={Styles['menu-link-item']}><Link to="/reviews">Reviews</Link></li>
                    <li className={Styles['menu-link-item']}><Link to="/specialbundles">Special bundles</Link></li>
                    <li className={Styles['menu-link-item']}><Link to="/contactus">Contact us</Link></li>
                </ul>
            </div>
            <div className={Styles["menu-user-links"]}>
                <ul>
                    <li className={Styles['menu-link-item']}><a href="#"><FiSearch /></a></li>
                    <li className={Styles['menu-link-item']}><a href="#"><FiUser /></a></li>
                    <li className={Styles['menu-link-item']}><a href="#"><LiaShoppingBagSolid /></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default MainMenu;