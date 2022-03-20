import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaBitbucket} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Acerca de mí</a></li>
        <li><a href='#experience'>Conocimientos</a></li>
        <li><a href='#projects'>Proyectos</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/alafertte/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/Karmacode00' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://bitbucket.org/andrealaf' target='_blank' rel='noreferrer'><FaBitbucket /></a>
        <a href='https://twitter.com/karmacode00' target='_blank' rel='noreferrer'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>Made with <BsFillHeartFill /></small>
      </div>
    </footer>
  )
}

export default Footer