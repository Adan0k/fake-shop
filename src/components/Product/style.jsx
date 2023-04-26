import styled from "styled-components";

export const ProductCard = styled.div`
     :hover{
    padding: 10px 5px 10px 5px;
    border: 1px solid #ebebeb;
    cursor: pointer;
    }
    height: 30rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    border-radius: 10px;
    transition: border 0.4s ease-out;
    box-sizing: border-box;

    & img{
        height: 50%px;
        width: 55%;
    }
    & span{
        width: 100%;
        font-size: 25px;
        text-align: center;
    }
    & h3{
        text-align: center;
        padding: 10px;
    }
`