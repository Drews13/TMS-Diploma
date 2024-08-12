import styled from "styled-components";

export const StyledPoster = styled.div`
display: flex;
gap: 40px;
`

export const StyledPosterPreview = styled.div`
width: 1000px;
`

export const StyledPosterPic = styled.img`
width: 100%;
border-radius: 20px;
margin-bottom: 32px;
`

export const StyledButtonIcon = styled.img`
width: 24px;
margin: auto;
`

export const StyledPosterInfoContainer = styled.div`
flex-grow: 1;
`

export const StyledGenresList = styled.ul`
list-style-type: none;
display: flex;
gap: 10px;
`

export const StyledGenresListItem = styled.li`
color: #AFB2B6;
font-weight: 500;
line-height: 24px;
`

export const StyledPosterName = styled.div`
font-weight: 600;
line-height: 60px;
margin-bottom: 24px;
`

export const StyledPosterSquares = styled.div`
display: flex;
gap: 20px;
margin-bottom: 40px;
`

export const StyledPosterRating = styled.div<{$rating: number}>`
background-color: ${props => (props.$rating >= 7) ? "#00A340" : (props.$rating >= 5) ? "#F3A608" : "#F45D2D"};
padding: 2px 8px;
font-weight: 600;
border-radius: 6px;
line-height: 24px;
`

export const StyledPosterLength = styled.div`
background-color: #323537;
padding: 2px 8px;
font-weight: 600;
border-radius: 6px;
line-height: 24px;
`

export const StyledPosterDesc = styled.p`
font-weight: 500;
line-height: 24px;
margin-bottom: 40px;
`

export const StyledInfoList = styled.ul`
width: 80%;
list-style-type: none;
display: flex;
flex-direction: column;
gap: 20px;
`

export const StyledInfoListItem = styled.li`
gap: 50px;
display: flex;
`

export const StyledInfoListItemTitle = styled.div`
min-width: 100px;
font-weight: 600;
color: #323537;
line-height: 24px;
`

export const StyledInfoListItemText = styled.p`
font-weight: 500;
line-height: 24px;
`