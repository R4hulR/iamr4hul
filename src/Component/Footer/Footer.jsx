import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Rahul Ray</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/iamr4hul_' target='blank'><FaInstagram /></a>
        <a href='https://www.twitter.com/R4hulRay' target='blank'><FaXTwitter /></a>
        <a href='https://www.facebook.com/profile.php?id=100025561851592' target='blank'><FaFacebookSquare /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Rahul Ray.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer