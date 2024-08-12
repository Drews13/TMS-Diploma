import { FC } from 'react';
import { IPosterComponent } from 'src/interfaces/components/IPosterComponent';
import { StyledGenresList, StyledGenresListItem, StyledLink, StyledPoster, StyledPosterName, StyledPosterPic, StyledPosterRating } from './styled';
import NoImage from 'src/assets/img/Posters/No-Image.png';

const Poster: FC<IPosterComponent> = ({poster}) => {
  return (
    <StyledPoster>
      <StyledPosterRating $rating={poster.rating.imdb}>{poster.rating.imdb}</StyledPosterRating>
      <StyledLink to={`/poster/${poster.id}`}>
      <StyledPosterPic src={poster.poster.url || NoImage}/>
      <StyledPosterName>{poster.name}</StyledPosterName>
      <StyledGenresList>
        {poster.genres.slice(0, 3).map(genre => <StyledGenresListItem key={genre.name}>{genre.name}</StyledGenresListItem>)}
      </StyledGenresList>
      </StyledLink>
    </StyledPoster>
  );
};

export default Poster;
