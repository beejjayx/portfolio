import styled from 'styled-components'
import { colors } from '../../styles'

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
  }

  .card-2 {
    top: 15vh;
    left: 2vh;
    cursor: pointer;
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
    display: block;
    flex-wrap: wrap;
    width: 400px;
    list-style: circle;
  
  }
`


export default AboutSection
