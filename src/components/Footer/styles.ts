import styled from "styled-components";
import { colors } from "../../styles";

const Info = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 250px;
    margin-bottom: 20px;

    a {
        font-family: segoe ui;
        text-decoration: none;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 1.5;
        cursor: pointer;
        color: ${colors.lightblue};
        transition: color 0.3s ease-in-out;

        &:hover {
            color: ${colors.white};
        }
    }
`

export default Info