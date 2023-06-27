import {FaInstagram,FaFacebookSquare,FaTwitter} from "react-icons/fa";
import Styles from './Footer.module.css';

const Footer = ()=>{
    return (
        <footer>
            <div className={Styles['footer-link-row']}>
                <div className={Styles['footer-link-row-column-1']}>
                    <h3>Logo</h3>
                </div>
                <div className={Styles['footer-link-row-column-2']}>
                    <h3>GameSeason</h3>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className={Styles['footer-link-row-column-2']}>
                    <h3>For Buyers</h3>
                    <li><a href="#">Buyer Support</a></li>
                    <li><a href="#">How to purchase</a></li>
                    <li><a href="#">Reviews</a></li>
                </div>
                <div className={Styles['footer-link-row-column-2']}>
                    <h3>User Term and Privacy</h3>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy and Cookies</a></li>
                </div>
            </div>
            <div className={Styles['footer-social-row']}>
                <div className={Styles['footer-twitter']}><FaTwitter/></div>
                <div className={Styles['footer-facebook']}><FaFacebookSquare/></div>
                <div className={Styles['footer-insta']}><FaInstagram/></div>
            </div>
            <div className={Styles['footer-copyright-row']}>Copyright &copy;2023 GameSeason</div>
        </footer>
    );
}
export default Footer;