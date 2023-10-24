import { FC } from 'react';
import { IPosterComponent } from 'src/interfaces/components/IPosterComponent';
import { StyledGenresList, StyledGenresListItem, StyledPoster, StyledPosterName, StyledPosterPic } from './styled';

const Poster: FC<IPosterComponent> = ({post}) => {
  return (
    <StyledPoster>
      <StyledPosterPic src={post.poster.previewUrl}/>
      <StyledPosterName>{post.name}</StyledPosterName>
      <StyledGenresList>
        {post.genres.slice(0, 3).map(genre => <StyledGenresListItem key={genre.name}>{genre.name}</StyledGenresListItem>)}
      </StyledGenresList>
    </StyledPoster>
  );
};

export default Poster;
