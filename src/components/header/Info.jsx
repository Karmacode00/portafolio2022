import React from 'react'
import CV from '../../assets/formato.pdf'

const Info = () => {
  return (
      <div className='info'>
          <a href={CV} download className='btn'>Descarga mi CV</a>
          <a href='#contact' className='btn btn-primary'>Envíame un mensaje</a>
      </div>
  )
}

export default Info