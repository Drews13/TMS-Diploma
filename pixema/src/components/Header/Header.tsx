import Input from "../ui/Input";
import LogoIcon from 'src/assets/img/Header/logo.png';
import NoAvatarIcon from 'src/assets/img/Header/no-avatar.png';
import { StyledAccount, StyledAvatar, StyledBtnContainer, StyledHeader, StyledHeaderGroup, StyledInputContainer, StyledLogo, StyledUsername } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_FILTERS_CREATOR, ON_SEARCH_CREATOR, RESET_PAGINATION_CREATOR, SET_MODAL_VISIBILITY_CREATOR } from "src/actions/actions";
import Button from "../ui/Button";
import { ROUTE_SETTINGS } from "src/constants/Routes";

const Header = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const userData = useSelector(({userData}) => userData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ON_SEARCH_CREATOR(inputValue));
    dispatch(RESET_PAGINATION_CREATOR());
    dispatch(CLEAR_FILTERS_CREATOR());
  }, [inputValue]);

  return (
    <StyledHeader>
      <Link to="/"> 
        <StyledLogo src={LogoIcon}/>
      </Link>
      <StyledHeaderGroup>
        <StyledInputContainer>
          <Input placeholder="Search" type="text" value={inputValue} callback={setInputValue} isSearch={true} errText=""/>
        </StyledInputContainer>
        { !!userData 
          ? <StyledAccount onClick={()=> navigate(ROUTE_SETTINGS)}>
              <StyledAvatar src={NoAvatarIcon}/>
              <StyledUsername>{userData.name}</StyledUsername>
            </StyledAccount>
          : 
            <StyledBtnContainer>
              <Button isGrey={false} callback={() => dispatch(SET_MODAL_VISIBILITY_CREATOR())}>Sign In</Button>
            </StyledBtnContainer>
          }
      </StyledHeaderGroup>
    </StyledHeader>
  );
};

export default Header;