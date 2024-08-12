import styled from "styled-components";

export const StyledModalWrapper = styled.div`
position: fixed;
z-index: 1;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.5);
`

export const StyledModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #242426;
width: 574px;
padding: 40px;
`