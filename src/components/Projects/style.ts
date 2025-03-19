import styled from "styled-components";
import { colors } from "../../styles";

const Display = styled.div`
    width: 100%;
    height: 100vh;  
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    height: 35%;
    color: ${colors.background};

    .card {
        position: relative;
        width: 300px;
        height: 250px;
        text-align: center;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        background-color: ${colors.blue};

        img {
            position: relative;
            width: 250px;
            top: -40px;
            border-radius: 5px;
            box-shadow: 0px 1px 10px rgba(14, 14, 41, 0.5);
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
    }
`

export default Display