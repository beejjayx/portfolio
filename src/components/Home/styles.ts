import styled from 'styled-components'
import { breakpoints, fadeDown } from '../../styles'


export const PSection = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  height: 100vh;
`

const Text = styled.div`
  display: block;
  font-family: 'Coda', system-ui;

  h1 {
    font-size: 90px;
    line-height: 1.5;
  }

  h2 {
    font-size: 50px;
    filter: brightness(70%); 
    line-height: 1.5;
  }

  p {
    width: 60vh;
    margin-left: 3px;
    

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  .text-animation {
    opacity: 0;
    transform: translateY(-20px);
    animation: ${fadeDown} 1s ease-in forwards;
  }

  .text-animation:nth-child(4) {
    animation-delay: 0.8s;
  }

  .text-animation:nth-child(3) {
    animation-delay: 1s;
  }

  .text-animation:nth-child(2) {
    animation-delay: 1.3s;
  }

  .text-animation:nth-child(1) {
    animation-delay: 1.6s;
  }
}



`


export default Text
