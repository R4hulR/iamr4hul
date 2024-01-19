import './About.css'
// import ME from '../../assets/me-about.jpg'
import ME2 from '../../assets/tony.jpg'
import { FaAward } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME2} alt='about'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <GoProject className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className='about__card'>
              <SiLeetcode className='about__icon' />
              <h5>Leetcode</h5>
              <small>100+ Problems</small>
            </article>
          </div>
          <p>
          Fresh JIS grad, armed with code and sass (the programming kind!), seeking a team to build magic with ✨ UX, HTML, CSS, JS, React JS, and GitHub. Hit that contact button - let us make pixels dance!
          </p>
          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About;