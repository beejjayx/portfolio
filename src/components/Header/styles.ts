import styled from 'styled-components'
import { colors, slideRight } from '../../styles'

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
    margin-left: 10px;
    width: 90px;
  }
`

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


  ul {
    display: flex;
    list-style: none;

    li {
      margin: 20px;

      a {
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
`

export default HeaderBar
