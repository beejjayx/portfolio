import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

const AboutSection = styled.section`
  width: 100%;
  height: 100vh;  
  position: relative;

  h1 {
    position: relative;
    text-align: center;
    top: 15vh;
    left: 0;
    font-size: 160px;
    font-family: "Bebas Neue", sans-serif;
    z-index: 1;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 110px;
      text-align: right;
      width: 60%;
      left: 20vh;
      top: 22vh;
      text-shadow: 2px 2px 4px rgba(8, 13, 83, 0.6);
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 100px;
      top: 15vh;
      left: 10vh;
    }
  }
`

export const Deck = styled.div`
  position: relative;
  width: 330px;
  perspective: 1000px;
  background-color: ${colors.orange};

  .card {
    width: 100%;
    position: absolute;
    transition: transform 0.6s ease, z-index 0.3s;
  }

  .card-1 {
    top: 15vh;
    left: 15vh;
    
    @media (max-width: ${breakpoints.desktop}) {
      top: -15vh;
      left: 10vh;
    }

    @media (max-width: ${breakpoints.tablet}) {
      top: -30vh;
      left: 5vh;
    }
  }

  .card-2 {
    top: 15vh;
    left: 2vh;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      top: -15vh;
      left: 2vh;
      }

    @media (max-width: ${breakpoints.tablet}) {
      top: -30vh;
      left: -2vh;
    }
  }

  .card:nth-child(1) {
    z-index: 2;
  }

  .card:nth-child(2) {
    z-index: 1;
  }

  .card:nth-child(2):hover {
    z-index: 2;
    transform: translateY(-10px) translateX(30px);
  }

  img {
    width: 100%;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    } 

    @media (max-width: ${breakpoints.tablet}) {
      width: 70%;
    } 
  }
`

export const Content = styled.div`
  position: absolute;
  width:  500px;
  top: 38vh;
  right: 0;
  z-index: 2;

  div {
    display: flex;
  }
  
  p {
    margin-top: 20px;
  }

  ul {
    margin: 20px;
    width: 400px;
    list-style: circle;
  }

  @media (max-width: ${breakpoints.desktop}) {
    color: ${colors.ice};
    width: 90%;
    margin-top: 8em;
    margin-right: 20px;
  }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 15em;
      width: 85%;
    }
`


export default AboutSection
