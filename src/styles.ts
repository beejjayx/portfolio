import styled, { createGlobalStyle } from "styled-components";

export const colors = {
    white: '#fff',
    background: '#14213d'
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
    `

export const BodyContainer = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    `