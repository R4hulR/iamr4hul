import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5srxyh', 'template_l22ckhh', form.current, 'BHmQvUUB3nz4KtZhQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>R4hulR@protonmail.com</h5>
          <a href='mailto:R4hulR@protonmail.com'>Send A Message</a>
        </article>
        <article className='contact__option'>
        <FaFacebookMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>R4hulR</h5>
          <a href='https://m.me/R4hul'>Send A Message</a>
        </article>
        <article className='contact__option'>
        <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>9983271195</h5>
          <a href='https://api.whatsapp.com/send?phone=9983271195'>Send A Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required></input>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact