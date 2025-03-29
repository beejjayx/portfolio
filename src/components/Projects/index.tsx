import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DisplayGrid, { Grid } from './styles'

import efood from '../../assets/images/efood.png'
import pandora from '../../assets/images/pandora.png'
import raven from '../../assets/images/raven.png'
import github from '../../assets/images/git.png'
import vercel from '../../assets/images/vercel.png'

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: 'ease' })
  }, [])

  return (
    <>
      <DisplayGrid>
        <h1 data-aos="fade-down">Alguns de meus projetos:</h1>
        <div className="gridbox">
          <Grid>
            <div className="card">
              <div className="icon-div">
                <a href="https://github.com/beejjayx/Pandora">
                  <img className="link" src={github} alt="github" />
                </a>
                <a href="https://projeto-3-2.vercel.app/">
                  <img className="link" src={vercel} alt="vercel" />
                </a>
              </div>
              <div>
                <img src={pandora} alt="pandora" />
                <div className="overlay"></div>
              </div>
              <h3>Pandora</h3>
              <p>
                Landing page para uma cafeteria, com carrossel e estilos CSS
                responsivos, e aplicação de classes e estilos fornecidos pelo
                Bootstrap.
              </p>
            </div>

            <div className="card">
              <div className="icon-div">
                <a href="https://github.com/beejjayx/e-food">
                  <img className="link" src={github} alt="github" />
                </a>
                <a href="https://project-6-0.vercel.app/">
                  <img className="link" src={vercel} alt="vercel" />
                </a>
              </div>
              <div>
                <img src={efood} alt="efood" />
                <div className="overlay"></div>
              </div>
              <h3>e-Food</h3>
              <p>
                Site de delivery utilizando React, TypeScript e informações
                gerenciadas por API, além de validação com Yup e Formik.
              </p>
            </div>

            <div className="card">
              <div className="icon-div">
                <a href="https://github.com/beejjayx/raven">
                  <img className="link" src={github} alt="github" />
                </a>
                <a href="https://bootstrap-avancado-olive.vercel.app/">
                  <img className="link" src={vercel} alt="vercel" />
                </a>
              </div>
              <div>
                <img src={raven} alt="raven" />
                <div className="overlay"></div>
              </div>
              <h3>Raven</h3>
              <p>
                Portal de notícias responsivo criado com modais interativas e
                funcionais com JavaScript, navegação ativa, criação de abas e
                toasts com Bootstrap.
              </p>
            </div>
          </Grid>
        </div>
      </DisplayGrid>
    </>
  )
}

export default Projects
