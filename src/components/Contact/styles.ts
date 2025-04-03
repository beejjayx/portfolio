import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

const ContactInfo = styled.section`
    display: flex;
    width: 100%;
    height: 80vh;
    text-align: center;
    align-items: center;

    div {
        width: 50%;
        margin: 0 auto;
        text-align: center;

        h1 {
            font-size: 40px;
            margin-bottom: 20px; 
        } 

        @media (max-width: ${breakpoints.tablet}) {
            width: 80%;
        }
    }

    button {
        margin-top: 40px;
        border-radius: 5px;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        padding: 12px 42px;
        background-color: ${colors.white};
        border: 1px solid ${colors.blue};
        box-shadow: 0px 8px 16px rgba(15, 18, 56, 0.8);
        transition: background-color 0.4s ease-in-out;
    }

    button span {
        color: ${colors.blue};
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0.7px;
    }

    button:hover {
        animation: rotate 0.7s ease-in-out both;
        background-color: ${colors.orange};
        border: 1px solid ${colors.white};
    }

    button:hover span {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
        color: ${colors.white};
    }


    @keyframes rotate {
        0% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
        25% {
            transform: rotate(3deg) translate3d(0, 0, 0);
        }
        50% {
            transform: rotate(-3deg) translate3d(0, 0, 0);
        }
        75% {
            transform: rotate(1deg) translate3d(0, 0, 0);
        }
        100% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
    }

    @keyframes storm {
        0% {
            transform: translate3d(0, 0, 0) translateZ(0);
        }
        25% {
            transform: translate3d(4px, 0, 0) translateZ(0);
        }
        50% {
            transform: translate3d(-3px, 0, 0) translateZ(0);
        }
        75% {
            transform: translate3d(2px, 0, 0) translateZ(0);
        }
        100% {
            transform: translate3d(0, 0, 0) translateZ(0);
        }
    }

    img {
        position: relative;
        width: 50px;
        top: 30px;
        margin: 30px;
        transition: transform 0.5s ease;

        &:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0px 0px 20px rgb(211, 121, 61);
            border-radius: 50%;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-top: 10em;
    }
        
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        margin-top: 0;
    }
`

export default ContactInfo