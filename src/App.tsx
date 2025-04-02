import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { GlobalStyle } from './styles'
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
