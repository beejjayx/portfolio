import { useEffect, useState } from 'react'
import logo from '../../assets/images/flower.png'
import HeaderBar from './style'
import { Menu } from './style'

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
            <a href="#">Sobre mim</a>
          </li>
          <li className="text-animation">
            <a href="#">Projetos</a>
          </li>
          <li className="text-animation">
            <a href="#">Contato</a>
          </li>
        </ul>
      </Menu>
    </HeaderBar>
  )
}

export default Header
