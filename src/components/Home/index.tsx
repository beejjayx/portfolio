import ButtonOpenPDF from '../Button'
import Text, { PSection } from './styles'

const Home = () => (
  <PSection id="home">
    <Text>
      <p className="text-animation">Olá, meu nome é</p>
      <h1 className="text-animation">BENJI D'EL REI</h1>
      <h2 className="text-animation">Desenvolvedor Full Stack Java</h2>
      <p className="text-animation">
        Programador com sólida formação e experiência em desenvolvimento Full
        Stack Java especialista em Web Design além de criação de APIs e
        integração Front e Back-end.
      </p>
      <ButtonOpenPDF />
    </Text>
  </PSection>
)

export default Home
