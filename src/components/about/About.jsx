import React from 'react'
import './about.css'
import Photo from '../../assets/codepic.png'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme.</h5>
      <h2>Acerca de mí</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Photo} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Técnico en Programación y Análisis de Sistemas</h5>
              <small>Estudiante</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Bootcamp Laboratoria</h5>
              <small>Egresada</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Derecho</h5>
              <small>Egresada</small>
            </article>
          </div>

          <p>
          Developer apasionada por la tecnología, las ciencias sociales y las humanidades, egresé de la carrera de Derecho por este interés en la sociedad y las personas.
          <br />
          Luego la programación me cautivó y esto me motivó a buscar otro rumbo. 
          <br />
          Soy una convencida de que con la tecnología y un mejor
          acceso a ella se puede cambiar al mundo.
          <br />
          La curiosidad y las ganas de aprender han sido los principales motores en el desarrollo de mis habilidades.
          </p>

          <a href='#contact' className='btn btn-primary'>¡Contáctame!</a>
        </div>
      </div>
    </section>
  )
}

export default About