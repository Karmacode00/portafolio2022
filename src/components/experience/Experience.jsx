import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades</h5>
      <h2>Conocimientos</h2>

      <div className='container experience__container'>
        <div className='experience__1'>
          <h3>Conocimientos técnicos</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Swift</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
          </div>
        </div>
{/* ------------ */}
        <div className='experience__2'>
        <h3>Otras habilidades</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Inglés</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GCP</h4>
                {/* <small className='text-light'>Placeholder</small> */}
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience