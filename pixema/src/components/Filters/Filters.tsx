import { useEffect, useRef, useState } from "react";
import { StyledFilters, StyledFiltersClose, StyledFiltersGroup, StyledFiltersGroupTitle, StyledFiltersHeader, StyledFiltersList, StyledFiltersSort, StyledFiltersSortBtn, StyledFiltersSortBtnActive, StyledFiltersSortGroup, StyledFiltersTitle, StyledFiltersUIContainer, StyledFiltersWrapper } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CLEAR_FILTERS_CREATOR, SET_FILTERS_CREATOR, SET_FILTERS_VISIBILITY_CREATOR } from "src/actions/actions";
import Input from "../ui/Input";
import Button from "../ui/Button";
import CroosIcon from 'src/assets/img/Filters/Close.png';

const Filters = () => {
  const [activeBtn, setActiveBtn] = useState<"Rating" | "Year">("Year");
  const [yearFrom, setYearFrom] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');
  const [ratingFrom, setRatingFrom] = useState<string>('');
  const [ratingTo, setRatingTo] = useState<string>('');

  const filtersVisibility = useSelector(({filtersVisibility}) => filtersVisibility);
  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({target}: MouseEvent): void => {
    if (target instanceof Node && !filtersRef.current?.contains(target)) {
      dispatch(SET_FILTERS_VISIBILITY_CREATOR());
    }
  };

  const clearFilters = async () => {
    setActiveBtn("Year");
    setYearFrom("");
    setYearTo("");
    setRatingFrom("");
    setRatingTo("");
    
    dispatch(CLEAR_FILTERS_CREATOR());
    dispatch(SET_FILTERS_VISIBILITY_CREATOR());
  }

  const setFilters = () => {
    const filters = {
      sort: activeBtn,
      years: {
        from: yearFrom,
        to: yearTo
      },
      rating: {
        from: ratingFrom,
        to: ratingTo
      }
    };

    dispatch(SET_FILTERS_CREATOR(filters));
    dispatch(SET_FILTERS_VISIBILITY_CREATOR());
  }

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.addEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <StyledFiltersWrapper $isVisible={filtersVisibility} ref={wrapperRef}>
      <StyledFilters ref={filtersRef} $isVisible={filtersVisibility}>
        <StyledFiltersHeader>
          <StyledFiltersTitle>Filters</StyledFiltersTitle>
          <StyledFiltersClose src={CroosIcon} onClick={() => dispatch(SET_FILTERS_VISIBILITY_CREATOR())}/>
        </StyledFiltersHeader>
        <StyledFiltersSort>
          <StyledFiltersGroupTitle>Sort by</StyledFiltersGroupTitle>
          <StyledFiltersSortGroup>
            {activeBtn === "Rating" 
              ? <StyledFiltersSortBtnActive onClick={() => setActiveBtn("Rating")}>Rating</StyledFiltersSortBtnActive>
              : <StyledFiltersSortBtn onClick={() => setActiveBtn("Rating")}>Rating</StyledFiltersSortBtn> 
            }
            {activeBtn === "Year" 
              ? <StyledFiltersSortBtnActive onClick={() => setActiveBtn("Year")}>Year</StyledFiltersSortBtnActive>
              : <StyledFiltersSortBtn onClick={() => setActiveBtn("Year")}>Year</StyledFiltersSortBtn> 
            }
          </StyledFiltersSortGroup>
        </StyledFiltersSort>  
        <StyledFiltersList>
          <div>
            <StyledFiltersGroupTitle>Years</StyledFiltersGroupTitle>
            <StyledFiltersGroup>
              <StyledFiltersUIContainer>
                <Input placeholder="From" type="number" value={yearFrom} callback={setYearFrom} isSearch={false} errText=""/>
              </StyledFiltersUIContainer>
              <StyledFiltersUIContainer>
                <Input placeholder="To" type="number" value={yearTo} callback={setYearTo} isSearch={false} errText=""/>
              </StyledFiltersUIContainer>
            </StyledFiltersGroup>
          </div>
          <div>
            <StyledFiltersGroupTitle>Rating</StyledFiltersGroupTitle>
              <StyledFiltersGroup>
                <StyledFiltersUIContainer>
                  <Input placeholder="From" type="number" value={ratingFrom} callback={setRatingFrom} isSearch={false} errText=""/>
                </StyledFiltersUIContainer>
                <StyledFiltersUIContainer>
                  <Input placeholder="To" type="number" value={ratingTo} callback={setRatingTo} isSearch={false} errText=""/>
                </StyledFiltersUIContainer>
              </StyledFiltersGroup>
          </div>
        </StyledFiltersList>
        <StyledFiltersGroup>
          <StyledFiltersUIContainer>
            <Button isGrey={true} callback={() => clearFilters()}>Clear filter</Button>
          </StyledFiltersUIContainer>
          <StyledFiltersUIContainer>
            <Button isGrey={false} callback={() => setFilters()}>Show Results</Button>
          </StyledFiltersUIContainer>
        </StyledFiltersGroup>
      </StyledFilters>
    </StyledFiltersWrapper>
  );
};

export default Filters;
