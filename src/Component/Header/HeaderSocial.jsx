import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaMedium } from "react-icons/fa";
export default function HeaderSocial() {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/r4hulray" target="blank"><FaLinkedin/></a>
        <a href="https://github.com/R4hulR" target="blank"><IoLogoGithub /></a>
        <a href="https://medium.com/@R4hulRay" target="blank"><FaMedium /></a>
    </div>
  )
}
