import styled from "styled-components";

export const ProductContainer = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .grid {
    width: 90%;
    display: flex;
    justify-content: space-evenly;

    & .image-layer {
        width: 30%;
        
        grid-area: main;

        & img {
            width: 100%;
            height: 100%
        }
    }
    & .info {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            grid-area: right;
            width: 30%;

            & h3 {
                font-size: 30px;
            }
            & p {
                font-size: 17px;
            }
            & div {
                width: 50%;
                & span{
                    font-size: 40px;
                    margin-right: 10px;
                }
                & button{
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: border 0.5s;
                    height: 50%;

                    :hover{
                        border-bottom: 1px solid #B8B8B8;
                    }
                }
            }
        }
    }
`