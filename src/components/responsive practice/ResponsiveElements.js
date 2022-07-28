import styled from "styled-components";

export const SmallContainer = styled.div`
    @media screen and (width:600px) {
        body {
            color: red;
        }
    }
`

export const SmallWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
`

export const SmallH1 = styled.h1`
    color: black;
    font-size: 2rem;
    font-weight: bold;
`

export const MediumContainer = styled.div`
@media screen and (max-width: 800px) {
    body {
        background: blue;
    }
}
`

export const MediumWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
`

export const MediumH1 = styled.h1`
    color: black;
    font-size: 2rem;
    font-weight: bold;
`

export const LargeContainer = styled.div`
@media screen and (max-width: 1100px) {
    body {
        background: purple;
    }
}
`

export const LargeWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
`

export const LargeH1 = styled.h1`
    color: black;
    font-size: 2rem;
    font-weight: bold;
`


