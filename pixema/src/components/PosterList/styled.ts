import styled from "styled-components";

export const StyledPosterList = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
row-gap: 40px;
`;

export const StyledPagination = styled.button`
cursor: pointer;
font-weight: 500;
display: block;
margin: auto;
margin-top: 64px;
border: none;
width: 161px;
text-align: center;
padding: 8px;
background-color: #323537;
border-radius: 40px;
color: white;

&:hover {
  color: #7B61FF;
}
`