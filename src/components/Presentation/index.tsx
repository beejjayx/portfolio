import ButtonOpenPDF from '../Button'
import Text, { PSection } from './style'

const Presentation = () => (
  <PSection>
    <Text>
      <p>Olá, meu nome é</p>
      <h1>BENJI D'EL REI</h1>
      <h2>Desenvolvedor Full Stack Java</h2>
      <p>
        Programador com sólida formação e experiência em desenvolvimento Full
        Stack Java especialista em Web Design além de criação de APIs e
        integração Front e Back-end.
      </p>
      <ButtonOpenPDF />
    </Text>
  </PSection>
)

export default Presentation
