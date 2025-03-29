import Header from './components/Header'
import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BodyContainer, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BodyContainer>
        <Presentation />
        <About />
        <Projects />
        <Contact />
      </BodyContainer>
      <Footer />
    </>
  )
}

export default App
