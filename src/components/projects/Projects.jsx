import React from 'react'
import './projects.css'
import IMG1 from '../../assets/gymapp.png'
import IMG2 from '../../assets/slots.png'
import IMG3 from '../../assets/crud.png'
import IMG4 from '../../assets/diccionario.png'
import IMG5 from '../../assets/first.png'
import IMG6 from '../../assets/calculadora.png'

//Array

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Gym App',
    github: 'https://github.com/Karmacode00/Gym_App',
    description: 'Aplicación para Android, permite que el usuario se registre y añada su peso. Calcula IMC y además filtrar entradas por fecha. Realizado con Java en Android Studio.',
    demo: 'lhttps://github.com/Karmacode00/Gym_App'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Slots Game',
    github: 'https://github.com/Karmacode00/SlotsGame',
    description: 'Juego tragamonedas, cuando las imagenes coinciden, se ganan puntos. Realizado con Swift en XCode. ',
    demo: 'https://github.com/Karmacode00/SlotsGame'
  },
  {
    id: 3,
    image: IMG3,
    title: 'App CRUD',
    github: 'https://bitbucket.org/andrealaf/apicrud/src/master/',
    description: 'Aplicación CRUD realizada con Java y PostgreSQL. Permite realizar las operaciones básicas en una base de datos.',
    demo: 'https://apicrudciisa.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Diccionario',
    github: 'https://bitbucket.org/andrealaf/diccionario/src/master/',
    description: 'Diccionario Oxford, permite buscar palabras consultando API. Realizada con Java y PostgreSQL.',
    demo: 'https://app-diccionario.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'First Swift App',
    github: 'https://github.com/Karmacode00/FirstSwiftApp',
    description: 'Mi primera app simple utilizando Swift, permite dar y quitar "me gusta" a una imagen.',
    demo: 'https://github.com/Karmacode00/FirstSwiftApp'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Calculadora',
    github: 'https://bitbucket.org/andrealaf/calculadora/src/master/',
    description: 'Calculadora de tasa e interés desarrollada en Java. ',
    demo: 'https://bitbucket.org/andrealaf/calculadora/src/master/'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Mis proyectos</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, description, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5>{description}</h5>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank' rel='noreferrer'>Repositorio</a>
          {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a> */}
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects