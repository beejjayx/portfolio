import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

const AboutSection = styled.section`
  width: 100%;
  height: 100vh;  
  position: relative;
  margin-bottom: 20vh;

  h1 {
    position: absolute;
    text-align: center;
    top: 15vh;
    left: 0;
    font-size: 160px;
    font-family: "Bebas Neue", sans-serif;
    z-index: 1;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 110px;
      text-align: right;
      width: 60%;
      left: 2em;
      text-shadow: 2px 2px 4px rgba(8, 13, 83, 0.6);
      z-index: 2;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 110px;
      font-weight: 100;
      width: 100%;
      left: 0;
    }

    @media (min-width: 471px) and (max-width: 768px) {
      width: 60%;
      left: 2em;
      }

  }
`

export const Deck = styled.div`
  position: relative;
  width: 330px;
  perspective: 1000px;

  .card {
    width: 100%;
    position: absolute;
    transition: transform 0.6s ease, z-index 0.3s;
  }

  .card-1 {
    top: 20em;
    left: 15vh;
    
    @media (max-width: ${breakpoints.tablet}) {
      top: 0;
      left: 10em;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 10em;
      left: 4em;
    }
  }

  .card-2 {
    top: 20em;
    left: 2vh;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      top: 0;
      left: 2vh;
      }

    @media (max-width: ${breakpoints.mobile}) {
      top: 10em;
      left: 0em;
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    } 

    @media (max-width: ${breakpoints.mobile}) {
      width: 70%;
    } 
  }
`

export const Content = styled.div`
  position: absolute;
  width:  500px;
  top: 20em;
  right: 0;
  z-index: 2;
      margin-bottom: 30px;

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

  @media (max-width: ${breakpoints.tablet}) {
    color: ${colors.ice};
    width: 90%;
    margin-right: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 15em;
  }
`


export default AboutSection
