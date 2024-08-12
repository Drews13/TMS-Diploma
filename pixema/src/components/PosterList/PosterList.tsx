import { FC } from "react";
import { StyledPagination, StyledPosterList } from "./styled";
import { IPosterList } from "src/interfaces/components/IPosterList";
import Poster from "../Poster/Poster";
import { IPoster } from "src/interfaces/IPoster";
import { useDispatch } from "react-redux";
import { SHOW_MORE_CREATOR } from "src/actions/actions";

const PosterList: FC<IPosterList> = ({posters, noPagination}) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledPosterList>
        { !!posters.length && posters.map((poster: IPoster) => <Poster poster={poster} key={poster.id}></Poster>) }
      </StyledPosterList>
      { !!posters.length && !noPagination && <StyledPagination onClick={() => dispatch(SHOW_MORE_CREATOR())}>Show More</StyledPagination> }
    </>
  );
};

export default PosterList;
