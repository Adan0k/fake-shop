import styled from "styled-components";

export const Center = styled.div`
display: flex;
justify-content: center;
`

export const Grid = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
`