import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(Link)`
font-weight: 600;
display: flex;
align-items: center;
gap: 16px;
text-decoration: none;
color: #80858B;

&:hover {
  color: #7B61FF;
}
`

export const StyledNavLinkActive = styled(Link)`
font-weight: 600;
display: flex;
align-items: center;
gap: 16px;
color: #7B61FF;
text-decoration: none;
`

export const StyledNavLinkIcon = styled.img`
width: 24px;
`

export const StyledNavLinkText = styled.p`
font-weight: 600;
`