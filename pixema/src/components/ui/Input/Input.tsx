import { FC } from "react";
import { StyledFilters, StyledInput, StyledInputContainer, StyledInputErr } from "./styled";
import { IInput } from "src/interfaces/components/IInput";
import FiltersIcon from 'src/assets/img/Header/Filters.png';
import { useDispatch } from "react-redux";
import { SET_FILTERS_VISIBILITY_CREATOR } from "src/actions/actions";

const Input: FC<IInput> = ({placeholder, type, value, callback, isSearch, errText}) => {
  const dispatch = useDispatch();
  const currentPath = window.location.pathname;

  return (
    <StyledInputContainer>
      <StyledInput 
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={e => callback(e.currentTarget.value)}
        $isErr={!!errText.length}
      />
      {isSearch && (currentPath === "/") 
        && <StyledFilters src={FiltersIcon} onClick={() => dispatch(SET_FILTERS_VISIBILITY_CREATOR())}/>
      }
      {!!errText.length && <StyledInputErr>{errText}</StyledInputErr>}
    </StyledInputContainer>
  );
};

export default Input;
