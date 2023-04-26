import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 10%;
    box-sizing: border-box;
    padding: 10px;
    & img {
        width: 15%;
    }
    & button{
        background: none;
        border: none;
        cursor: pointer;
    }
    & h3{
        width: 75%;
    }
`