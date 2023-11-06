import { FC } from "react";
import { StyledPosterList } from "./styled";
import { IPosterList } from "src/interfaces/components/IPosterList";
import Poster from "../Poster/Poster";
import { IPoster } from "src/interfaces/IPoster";

const PosterList: FC<IPosterList> = ({posters}) => {
  return (
    <StyledPosterList>
      { !!posters.length && posters.map((poster: IPoster) => <Poster poster={poster} key={poster.id}></Poster>) }
    </StyledPosterList>
  );
};

export default PosterList;
