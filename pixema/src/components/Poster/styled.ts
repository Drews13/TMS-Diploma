import styled from "styled-components";

export const StyledPoster = styled.div`
width: calc(25% - 15px);
display: flex;
flex-direction: column;
`

export const StyledPosterPic = styled.img`
width: 100%;
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