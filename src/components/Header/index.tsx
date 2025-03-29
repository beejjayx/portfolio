import { useEffect, useState } from 'react'

import HeaderBar from './styles'
import { Menu } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
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
      <img src={logo} alt="logo temporaria" />
      <Menu>
        <ul>
          <li className="text-animation">
            <a className="link" href="#">
              Home
            </a>
          </li>
          <li className="text-animation">
            <a className="link" href="#">
              Sobre mim
            </a>
          </li>
          <li className="text-animation">
            <a className="link" href="#">
              Projetos
            </a>
          </li>
          <li className="text-animation">
            <a className="link" href="#">
              Contato
            </a>
          </li>
        </ul>
      </Menu>
    </HeaderBar>
  )
}

export default Header
