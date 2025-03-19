import styled from 'styled-components'

const Background = styled.div`
  width: 100%;
  height: 100vh;  
  position: relative;

  h1 {
  position: relative;
  top: 15vh;
  left: 0;
  font-size: 160px;
  font-family: "Bebas Neue", sans-serif;
  z-index: 1;
  }
`

export const Content = styled.div`
  position: absolute;
  width:  500px;
  top: 38vh;
  right: 10vh;
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

export default Background
