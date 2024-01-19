import './Experience.css';
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
const Experience = () => {
  return (
  <section id='experience'>
    <h5>The Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
           <IoLogoHtml5 className='experience__details-icons'/>
          <div>
            <h4>HTMl</h4>
            <small className='text-light'>
              Experienced
            </small>
          </div>
          </article>
          <article className='experience__details'>
            <FaCss3 className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
          </article>
          <article className='experience__details'>
          <IoLogoJavascript className='experience__details-icons'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>
              Intermediate
            </small>
          </div>
          </article>
          <article className='experience__details'>
            <FaSass className='experience__details-icons' />
            <div>
            <h4>Sass</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
          </article>
          <article className='experience__details'>
          <FaReact className='experience__details-icons' />
          <div>
            <h4>React</h4>
            <small className='text-light'>
              Intermediate
            </small>
          </div>
          </article>
        </div>
      </div>
      <div className='experience__language'>
      <h3>Programming Languages/Other</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <FaPython className='experience__details-icons' />
          <div>
            <h4>Python</h4>
            <small className='text-light'>
              Intermediate
            </small>
          </div>
          </article>
          <article className='experience__details'>
          <FaCheckCircle className='experience__details-icons' />
          <div>
            <h4>C/C++</h4>
            <small className='text-light'>
              Intermediate
            </small>
          </div>
          </article>
          <article className='experience__details'>
          <FaGithub className='experience__details-icons'/>
          <div>
            <h4>Git</h4>
            <small className='text-light'>
              Basic
            </small>
          </div>
          </article>
          <article className='experience__details'>
          <SiMysql className='experience__details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>
              Basic
            </small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Experience