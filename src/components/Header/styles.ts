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


  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    width: 100%;
    margin: 0;
  }
`


const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(20, 33, 61, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: none;
  height: 80px;
  z-index: 3;
  transition: all 0.2s ease-in;

  img {
    height: 80px;
    width: 90px;
    cursor: pointer;
  }

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


  ${Menu} {
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
  .nav-link {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 5em;
    left: 0;
    width: 100%;
    text-align: center;
    list-style: none;
    background-color: ${colors.background};
    
    li {  
      padding: 5px;
      transform: translateY(-20px);
      transition: all .3s;

      .link {
        display: block;
        font-size: 15px;
        font-weight: 700;
        padding: 6px 10px;
        transition: all .3s;
      }
    }
  }
    
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }

//esconde o input checkbox
  #toggle {
    display: none;

  &:checked + label {
    border: 4px solid ${colors.ice};
    border-radius: 50%;
    height: 28px;
    left: 20px;
    width: 28px;
    transform: rotate(-135deg);
      &::before {
        background: ${colors.ice};
        top: 8px;
        left: 4px;
        width: 12px;
      }
      &::after {
        background: ${colors.ice};
        opacity: 1;
        top: 8px;
        left: 4px;
        visibility: visible;
        width: 12px;
      }
  }

  &:checked ~ .nav-link {
    display: block;
    opacity: 1;
    visibility: visible;

    &::before {
        opacity: 1;
    }
  
    li {
      transform: translateY(0);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    li:nth-child(1) {
      transition-delay: 0.4s;
    }

    li:nth-child(2) {
      transition-delay: 0.3s;
    }

    li:nth-child(3) {
      transition-delay: 0.2s;
    }

    li:nth-child(4) {
      transition-delay: 0.1s;
    }
  }
} 


label {
  background: none transparent;
  border: 4px solid coral;
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
  cursor: pointer;
  display: block;
  height: 24px;
  position: absolute;
  top: 25px;
  left: 20px;
  width: 24px;
  transition: all .2s;

  &::before {
    background: coral;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    top: 6px;
    width: 30px;
    transition: all .2s;
  }

  &::after {
    background: coral;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    top: 60px;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    transform: rotate(90deg);
    transition: all .2s;
  }

}

`

export default HeaderBar
