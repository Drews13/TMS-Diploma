import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export const StyledPoster = styled.div`
position: relative;
cursor: pointer;
width: calc(25% - 15px);
display: flex;
flex-direction: column;

&:hover {
  opacity: 0.5;
}
`

export const StyledPosterRating = styled.div<{$rating: number}>`
position: absolute;
top: 20px;
left: 20px;
background-color: ${props => (props.$rating >= 7) ? "#00A340" : (props.$rating >= 5) ? "#F3A608" : "#F45D2D"};
padding: 2px 8px;
font-weight: 600;
border-radius: 6px;
line-height: 24px;
`

export const StyledPosterPic = styled.img`
width: 100%;
height: 425px;
margin-bottom: 24px;
border-radius: 20px;
`

export const StyledPosterName = styled.p`
font-weight: 700;
line-height: 24px;
margin-bottom: 4px;
`

export const StyledGenresList = styled.ul`
max-width: 266px;
list-style-type: none;
display: flex;
/* justify-content: space-between; */
gap: 10px;
`

export const StyledGenresListItem = styled.li`
color: #AFB2B6;
font-weight: 500;
line-height: 24px;
`