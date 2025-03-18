import styled from 'styled-components'
import { colors } from '../../styles'

const HeaderBar = styled.div`
  height: 80px;
  display: flex;
  top: 0;
  position: sticky;
  background-color: rgb(20, 33, 61, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: none;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    height: 70px;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  }

  img {
    height: 80px;
    width: 90px;
  }
`

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 50px;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 20px;

      a {
        text-decoration: none;
        color: ${colors.white};
      }
    }
  }
`

export default HeaderBar
