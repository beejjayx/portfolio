import styled from 'styled-components'
import { breakpoints, colors, slideRight } from '../../styles'

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 50px;

  .text-animation {
    opacity: 0;
    transform: translateX(-50px);
    animation: ${slideRight} 1s ease-in forwards;
  }

  .text-animation:nth-child(2){
    animation-delay: 0.2s;
  }

  .text-animation:nth-child(1){
    animation-delay: 0.5s;
  }

  > ul {
    display: flex;
    list-style: none;

    li {
      margin: 20px;
      cursor: pointer;

      .link {
        text-decoration: none;
        color: ${colors.white};
      }

      .link:after {
        content: '';
        width: 0;
        background-color: ${colors.orange};
        display: block;
        height: 3px;
        transition: width 0.3s ease;
      }

      .link:hover::after {
        width: 100%;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    width: 100%;
    margin: 0;
  }
`


const HeaderBar = styled.div`
  height: 80px;
  display: flex;
  background-color: rgb(20, 33, 61, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: none;
  z-index: 10;
  transition: all 0.2s ease-in;

  &.scrolled-up {
    top: 0;
    position: sticky;
    box-shadow: 0px 3px 4px rgb(15, 24, 46);
  }

  &.scrolled-down {
    position: sticky;
    top: -80px;
  }

  &.at-top {  
    box-shadow: none;
  }

  img {
    height: 80px;
    width: 90px;
    margin-left: 10px;
    cursor: pointer;
    
    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 10em;;
    }
  }

  ${Menu} {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
    display: none;

    &.is-open {
      display: block;
    }

    ul {
      list-style: none;
      padding: 10px;
      position: absolute;
      right: 10px;
      top: 5em;
      text-align: right;
      margin-top: 10px;

      li {
      background-color: ${colors.blue};
      }
    }
      
    @media (min-width: ${breakpoints.desktop}) {
      display: none;
    }

`

export const Hamburguer = styled.div`
    margin: 20px;
    width: 30px;
    position: absolute;
    padding-top: 10px;
    right: 0;

    span {
      width: 100%;
      margin-bottom: 4px;
      height: 2px;
      display: block;
      background-color: red;
      cursor: pointer;
    }

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
`

export default HeaderBar
