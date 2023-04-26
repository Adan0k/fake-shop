import styled from "styled-components";

export const Block = styled.div`
    display: ${props => props.visibility ? "block" : "none"};
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.51);
    position: fixed;
    z-index 10;
    transition: background;
`

export const Drawer = styled.div`
    height: 100%;
    background-color: white;
    width: ${props => props.visibility ? "20%" : "0"};
    transition: all 0.5s;
    position: absolute;
    right: 0;
    z-index 20;
    overflow-x: hidden;
    padding-top: 20px;
`