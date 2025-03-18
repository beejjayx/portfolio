import { useEffect, useState } from 'react'
import logo from '../../assets/images/flower.png'
import HeaderBar from './style'
import { Menu } from './style'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <HeaderBar className={scrolled ? 'scrolled' : ''}>
            <img src={logo} alt="logo temporaria"/>
            <Menu>
                <ul>
                    <li>
                        <a href="#">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </Menu>
        </HeaderBar>
)
}

export default Header