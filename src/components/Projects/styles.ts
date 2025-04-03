import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

const DisplayGrid = styled.section`
    text-align: center;
    position: relative;
    height: 100vh;

    h1 {
        position: relative;
        top: 15vh;
        font-weight: 2; 
        font-size: 26px;

        @media (max-width: ${breakpoints.tablet}) {
            top: 0;
        }
    }

    .gridbox {
        top: 35vh;
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        
        @media (max-width: ${breakpoints.tablet}) {
            top: 0;
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 30em;
        margin-bottom: 30em;
    }


`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    height: 40%;
    color: ${colors.background};

    .card {
        position: relative;
        width: 300px;
        height: 250px;
        text-align: center;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        background-color: ${colors.blue};

    .icon-div {
            height: 50px;
            width: 300px;
            position: absolute;
            justify-content: space-evenly;
            display: flex;
            align-items: center;
            top: 0;
            opacity: 85%;
            z-index: 1;
            margin-top: -80px;
        }

    .link {
        margin-bottom: 10px;
        width: 30px;
        top: 40px;
        clip-path: inset(0 0 100% 0);
    }

    div {
        img {
            position: relative;
            width: 250px;
            top: -40px;
            border-radius: 5px;
            box-shadow: 0px 1px 10px rgba(14, 14, 41, 0.5)
        }

        .overlay {
            position: absolute;
            width: 250px;
            height: 250px;
            top: -40px;
            border-radius: 5px;
            background-color: ${colors.blue};
            mix-blend-mode: color;
            opacity: 0.8;
            left: 25px;
            transition: opacity 0.3s ease;
        }
    }

    &:hover .link {
        transform: scale(1.25);
        clip-path: inset(0 0 0 0); 
        transition: all 0.3s ease;
        transform: translateY(-40px);
    }

    p, h3 {
        margin: 0 auto;
        width: 90%;
        color: ${colors.white};
        clip-path: inset(0 0 100% 0);
    }

    &:hover { 
        height: 440px;
        transform: scale(1.05);
        box-shadow: 0px 15px 15px rgba(14, 14, 41, 0.5);
    }

    &:hover p, 
    &:hover h3 {
        clip-path: inset(0 0 0 0); 
        transition: all 0.5s ease;
    }        

    &:hover .overlay {
        opacity: 0;
    }

    
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 10em;
    }
}

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export default DisplayGrid