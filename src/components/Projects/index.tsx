import DisplayGrid, { Grid } from './style'

import efood from '../../assets/images/efood.png'
import pandora from '../../assets/images/pandora.png'
import raven from '../../assets/images/raven.png'
import github from '../../assets/images/git.png'
import vercel from '../../assets/images/vercel.png'

const Projects = () => (
  <>
    <DisplayGrid>
      <h1>Alguns de meus projetos:</h1>
      <div className="gridbox">
        <Grid>
          <div className="card">
            <div className="icon-div">
              <a href="#">
                <img className="link" src={github} alt="github" />
              </a>
              <a href="#">
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
              <a href="#">
                <img className="link" src={github} alt="github" />
              </a>
              <a href="#">
                <img className="link" src={vercel} alt="vercel" />
              </a>
            </div>
            <div>
              <img src={pandora} alt="efood" />
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
              <a href="#">
                <img className="link" src={github} alt="github" />
              </a>
              <a href="#">
                <img className="link" src={vercel} alt="vercel" />
              </a>
            </div>
            <div>
              <img src={raven} alt="efood" />
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

export default Projects
