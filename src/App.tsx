import About from './components/About'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import { BodyContainer, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BodyContainer>
        <Presentation />
        <About />
      </BodyContainer>
      <Projects />
    </>
  )
}

export default App
