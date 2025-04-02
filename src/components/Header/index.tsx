import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import HeaderBar, { Hamburguer, Menu, NavMobile } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollState, setScrollState] = useState({
    scrolledUp: false,
    atTop: true,
    lastScrollY: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrollState((prevState) => ({
        scrolledUp: currentScrollY < prevState.lastScrollY,
        atTop: currentScrollY === 0,

        lastScrollY: currentScrollY
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderBar
      className={`${scrollState.scrolledUp ? 'scrolled-up' : 'scrolled-down'} ${scrollState.atTop ? 'at-top' : ''}`}
    >
      <Link to="home" smooth={true} duration={500}>
        <img src={logo} alt="logo" />
      </Link>
      <Menu>
        <ul>
          <li className="text-animation">
            <Link className="link" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="about" smooth={true} duration={600}>
              Sobre mim
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="projects" smooth={true} duration={700}>
              Projetos
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="contact" smooth={true} duration={900}>
              Contato
            </Link>
          </li>
        </ul>
      </Menu>

      {/* HAMBURGUER MENU */}
      <NavMobile className={menuOpen ? 'is-open' : ''}>
        <ul>
          <li className="text-animation">
            <Link className="link" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="about" smooth={true} duration={600}>
              Sobre mim
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="projects" smooth={true} duration={700}>
              Projetos
            </Link>
          </li>
          <li className="text-animation">
            <Link className="link" to="contact" smooth={true} duration={900}>
              Contato
            </Link>
          </li>
        </ul>
      </NavMobile>

      <Hamburguer onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburguer>
    </HeaderBar>
  )
}

export default Header
