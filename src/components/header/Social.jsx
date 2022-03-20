import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FaBitbucket} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/alafertte/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/Karmacode00' target='_blank' rel='noreferrer'><ImGithub /></a>
        <a href='https://bitbucket.org/andrealaf' target='_blank' rel='noreferrer'><FaBitbucket /></a>
    </div>
  )
}

export default Social