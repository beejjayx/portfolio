import Display, { Grid } from './style'
import efood from '../../assets/images/efood.png'
import pandora from '../../assets/images/pandora.png'
import raven from '../../assets/images/raven.png'

const Projects = () => (
  <>
    <Display>
      <Grid>
        <div className="card">
          <img src={efood} alt="efood" />
          <h3>e-Food</h3>
          <p>
            Site de delivery utilizando React, TypeScript e informações
            gerenciadas por API, além de validação com Yup e Formik.
          </p>
        </div>

        <div className="card">
          <img src={pandora} alt="efood" />
          <h3>Pandora</h3>
          <p>
            Landing page para uma cafeteria, com carrossel e estilos CSS
            responsivos, e aplicação de classes e estilos fornecidos pelo
            Bootstrap.
          </p>
        </div>
        <div className="card">
          <img src={raven} alt="efood" />
          <h3>Raven</h3>
          <p>
            Portal de notícias responsivo criado com modais interativas e
            funcionais com JavaScript, navegação ativa, criação de abas e toasts
            com Bootstrap.
          </p>
        </div>
      </Grid>
    </Display>
  </>
)

export default Projects
