import { createGlobalStyle, keyframes } from 'styled-components'

export const colors = {
  white: '#fff',
  background: '#14213d',
  blue: '#3d5a80',
  lightblue: '#98c1d9',
  orange: '#ee6c4d',
  ice: '#e0fbfc',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cairo", sans-serif;
    }

    body {
        background-color: ${colors.background};
        color: ${colors.white};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        width: 90%;
    }
      @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
      }
  }
`

export const fadeDown = keyframes`
  from {                       
    opacity: 0;                 
    transform: translateY(-20px); 
  } to {                          
    opacity: 1;                   
    transform: translateY(0);     
`
export const slideRight = keyframes`
  from {                       
    opacity: 0;                 
    transform: translateX(-50px); 
  } to {                          
    opacity: 1;                   
    transform: translateX(0);     
`