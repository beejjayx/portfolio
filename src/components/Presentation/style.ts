import styled from 'styled-components'
import { fadeDown } from '../../styles'

const Text = styled.div`
  display: block;
  font-family: 'Coda', system-ui;

  h1 {
    font-size: 90px;
  }

  h2 {
    font-size: 50px;
    filter: brightness(70%); 
  }

  p {
    width: 60vh;
    margin-left: 3px;
  }

  .text-animation {
    opacity: 0;
    transform: translateY(-20px);
    animation: ${fadeDown} 1s ease-in forwards;
  }

  .text-animation:nth-child(4) {
    animation-delay: 1s;
  }

  .text-animation:nth-child(3) {
    animation-delay: 1.5s;
  }

  .text-animation:nth-child(2) {
    animation-delay: 1.7s;
  }

  .text-animation:nth-child(1) {
    animation-delay: 2s;
  }
}
`

export const PSection = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;

`

export default Text
