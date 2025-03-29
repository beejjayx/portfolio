import styled from 'styled-components'
import { colors } from '../../styles'

export const Click = styled.button`
  background-color: ${colors.white};
  position: relative;
  margin-top: 70px;
  padding: 12px 40px;
  border: solid 2px ${colors.background};
  border-radius: 5px;
  color: ${colors.background};
  font-family: 'Coda', system-ui;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  overflow: hidden;
  box-shadow: 0px 4px 13px rgba(15, 18, 56, 0.8);


  &:hover {
    color:  ${colors.ice};
    background-color:  ${colors.blue};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${colors.ice}, ${colors.blue});
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  & span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom,${colors.ice}, ${colors.blue});
    animation: animate2 2s linear infinite;
    animation-delay: 2s;
  }

  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  & span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left,${colors.ice}, ${colors.blue});
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  & span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top,${colors.ice}, ${colors.blue});
    animation: animate4 2s linear infinite;
    animation-delay: 2s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`

