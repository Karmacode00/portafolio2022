import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiMessageDots} from 'react-icons/bi'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cm5dgvb', 'template_txlai8u', form.current, 'WvZgwChNL12tANw58')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    alert('Mensaje Enviado')
  };

  return (
    <section id='contact'>
      <h5>Formas de conectar</h5>
      <h2>¡Contáctame!</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alafertteo@gmail.com</h5>
            <a href='mailto:alafertteo@gmail.com' target='_blank' rel='noreferrer'>Enviar email</a>
          </article>
          <article className='contact__option'>
            <BiMessageDots className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            {/*<h5>https://www.linkedin.com/in/alafertte</h5>*/}
            <a href='https://www.linkedin.com/in/alafertte' target='_blank' rel='noreferrer'>Enviar un mensaje</a>
          </article>
        </div>
        {/*FORM*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Nombre Apellido' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Tu Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact