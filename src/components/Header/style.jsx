import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #C9E4E7;
    height: 6rem;
    width: 100%;
    position: sticky;

    & .logo{
        height: 164px;
        position: relative;
        top: 50%;
    }

    & .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60%;

        & button{
            background: none;
            border: none;
            height: 50%%;
            width: 5%;
            cursor: pointer;
            position: relative;
            margin-top: 2.5%;

            & svg {
                height: 40%;
                width: 60%;
            }
        }
    }
    & .categories{
        display: flex;
        justify-content: center;
        height: 40%;
        & ul{
            list-style: none;
            display: flex;
            width: 50%;
            justify-content: space-evenly;
        }
        & li{
            cursor: pointer;
            height: 80%;
            transition: border 0.1s;
            :hover{
                border-bottom: 1px solid black;
            }
        }
    }
`
export const Input = styled.input`
    height: 2rem;
    width: 50rem;
    outline: none;
`