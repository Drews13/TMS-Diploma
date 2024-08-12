import styled from "styled-components";

export const StyledFiltersWrapper = styled.div<{$isVisible: boolean}>`
visibility: ${props => props.$isVisible ? "visible" : "hidden"};
transition: visibility 0.5s ease;
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.5);
`

export const StyledFilters = styled.div<{$isVisible: boolean}>`
padding: 48px 40px;
position: absolute;
top: 0;
bottom: 0;
right: -650px;
transition: transform 0.5s ease;
${props => props.$isVisible && 'transform: translate(-650px);'}
background-color: #242426;
`

export const StyledFiltersHeader = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 48px;
`

export const StyledFiltersTitle = styled.div`
font-weight: 600;
`

export const StyledFiltersClose = styled.img`
width: 24px;
height: 24px;
cursor: pointer;
`

export const StyledFiltersSort = styled.div`
padding-bottom: 34px;
border-bottom: 1px solid #323537;
`

export const StyledFiltersGroupTitle = styled.div`
font-weight: 600;
margin-bottom: 8px;
`

export const StyledFiltersSortGroup = styled.div`
border-radius: 10px;
border: 2px solid #323537;
display: flex;
`

export const StyledFiltersSortBtnActive = styled.button`
border: none;
background-color: #323537;
color: white;
text-align: center;
padding: 14px;
width: 50%;
cursor: pointer;

&:hover {
  opacity: 0.75;
}
`

export const StyledFiltersSortBtn = styled(StyledFiltersSortBtnActive)`
opacity: 0.5;
&:hover {
  opacity: 0.75;
}
`

export const StyledFiltersList = styled.ul`
margin-top: 32px;
list-style-type: none;
display: flex;
flex-direction: column;
gap: 24px;
margin-bottom: 170px;
`

export const StyledFiltersGroup = styled.div`
display: flex;
justify-content: space-between;
`

export const StyledFiltersUIContainer = styled.div`
width: 40%;
`