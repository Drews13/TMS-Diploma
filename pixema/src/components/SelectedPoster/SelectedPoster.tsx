import { FC } from "react";
import { ISelectedPoster } from "src/interfaces/components/ISelectedPoster";
import { 
  StyledButtonIcon, 
  StyledGenresList, 
  StyledGenresListItem, 
  StyledInfoList, 
  StyledInfoListItem, 
  StyledInfoListItemText, 
  StyledInfoListItemTitle, 
  StyledPoster, 
  StyledPosterDesc, 
  StyledPosterInfoContainer, 
  StyledPosterLength, 
  StyledPosterName,
  StyledPosterPic, 
  StyledPosterPreview, 
  StyledPosterRating, 
  StyledPosterSquares 
} from "./styled";
import Button from "../ui/Button";
import FavoritesIcon from 'src/assets/img/SideBar/favorites.png';

const SelectedPoster: FC<ISelectedPoster> = ({poster}) => {
  return (
    <StyledPoster>
      <StyledPosterPreview>
        <StyledPosterPic src={poster.poster.previewUrl}/>
        <Button isGrey={true}>
          <StyledButtonIcon src={FavoritesIcon}/>
        </Button>
      </StyledPosterPreview>
      <StyledPosterInfoContainer>
        <StyledGenresList>
          {poster.genres.slice(0, 3).map(genre => <StyledGenresListItem key={genre.name}>{genre.name}</StyledGenresListItem>)}
        </StyledGenresList>
        <StyledPosterName>{poster.name}</StyledPosterName>
        <StyledPosterSquares>
          <StyledPosterRating>{poster.rating.imdb}</StyledPosterRating>
          <StyledPosterLength>{poster.movieLength} min</StyledPosterLength>
        </StyledPosterSquares>
        <StyledPosterDesc>{poster.description}</StyledPosterDesc>
        <StyledInfoList>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>Year</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.year}</StyledInfoListItemText>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>BoxOffice</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.fees.world.currency}{poster.fees.world.value}</StyledInfoListItemText>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>Countries</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.countries.map(country => country.name).join(', ')}</StyledInfoListItemText>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>Actors</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.persons.filter(person => person.enProfession === "actor").map(person => person.name).join(', ')}</StyledInfoListItemText>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>Directors</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.persons.filter(person => person.enProfession === "director").map(person => person.name).join(', ')}</StyledInfoListItemText>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <StyledInfoListItemTitle>Writers</StyledInfoListItemTitle>
            <StyledInfoListItemText>{poster.persons.filter(person => person.enProfession === "writer").map(person => person.name).join(', ')}</StyledInfoListItemText>
          </StyledInfoListItem>
        </StyledInfoList>
      </StyledPosterInfoContainer>
    </StyledPoster>
  );
};

export default SelectedPoster;
