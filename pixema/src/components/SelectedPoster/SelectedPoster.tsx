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
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "src/interfaces/IUser";
import { SET_USER_DATA_CREATOR } from "src/actions/actions";
import { USERS_URL } from "src/constants/URLS";

const SelectedPoster: FC<ISelectedPoster> = ({poster}) => {
  const userData = useSelector(({userData}) => userData);
  const dispatch = useDispatch();

  const addFavorite = async () => {
    let newUserData: IUser = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      favoritesId: userData.favoritesId
    }
    let ind: number = newUserData.favoritesId.findIndex((id: number) => id === poster.id);
    (ind === -1) ? newUserData.favoritesId.push(poster.id) : newUserData.favoritesId.splice(ind, 1);
    dispatch(SET_USER_DATA_CREATOR(newUserData));

    await fetch(`${USERS_URL}/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData)
    });
  }

  return (
    <StyledPoster>
      <StyledPosterPreview>
        <StyledPosterPic src={poster.poster.url}/>
        <Button isGrey={!userData.favoritesId.includes(poster.id)} callback={() => addFavorite()}>
          <StyledButtonIcon src={FavoritesIcon}/>
        </Button>
      </StyledPosterPreview>
      <StyledPosterInfoContainer>
        <StyledGenresList>
          {poster.genres.slice(0, 3).map(genre => <StyledGenresListItem key={genre.name}>{genre.name}</StyledGenresListItem>)}
        </StyledGenresList>
        <StyledPosterName>{poster.name}</StyledPosterName>
        <StyledPosterSquares>
          <StyledPosterRating $rating={poster.rating.imdb}>{poster.rating.imdb}</StyledPosterRating>
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
