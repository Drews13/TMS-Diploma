import { FC } from 'react';
import { IPosterComponent } from 'src/interfaces/components/IPosterComponent';
import { StyledGenresList, StyledGenresListItem, StyledLink, StyledPoster, StyledPosterName, StyledPosterPic } from './styled';

const Poster: FC<IPosterComponent> = ({poster}) => {
  return (
    <StyledPoster>
      <StyledLink to={`/poster/${poster.id}`}>
      <StyledPosterPic src={poster.poster.previewUrl}/>
      <StyledPosterName>{poster.name}</StyledPosterName>
      <StyledGenresList>
        {poster.genres.slice(0, 3).map(genre => <StyledGenresListItem key={genre.name}>{genre.name}</StyledGenresListItem>)}
      </StyledGenresList>
      </StyledLink>
    </StyledPoster>
  );
};

export default Poster;
