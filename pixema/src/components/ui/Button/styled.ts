import styled from "styled-components";

export const StyledButton = styled.button<{$isGrey: boolean}>`
width: 100%;
border-radius: 10px;
padding: 16px 0;
text-align: center;
background-color: ${props => props.$isGrey ? "#323537" : "#7B61FF"};
border: none;
color: inherit;
cursor: pointer;

&:hover {
  opacity: 0.75;
}
`