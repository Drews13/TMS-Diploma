import styled from "styled-components";

export const StyledInputContainer = styled.div`
position: relative;
width: 100%;
`

export const StyledInput = styled.input<{$isErr: boolean}>`
height: 45px;
font-size: 16px;
padding: 16px;
background-color: #323537;
flex-grow: 1;
outline: none;
border: ${props => props.$isErr ? "2px solid #FF5154" : "none"};
border-radius: 10px;
width: 100%;
color: #FFF;

&::placeholder {
  color: #80858B;
}
`

export const StyledFilters = styled.img`
position: absolute;
top: 10px;
right: 10px;
width: 25px;
height: 25px;
cursor: pointer;
`

export const StyledInputErr = styled.p`
font-weight: 500;
line-height: 24px;
color: #FF5154;
`