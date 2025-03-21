import styled from 'styled-components'

const Text = styled.div`
  display: block;
  font-family: 'Coda', system-ui;

  h1 {
    font-size: 90px;
  }

  h2 {
    font-size: 50px;
    opacity: 0.7;
  }

  p {
    width: 60vh;
    margin-left: 3px;
  }
`

export const PSection = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
`

export default Text
