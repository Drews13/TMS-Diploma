import Input from "../ui/Input";
import LogoIcon from 'src/assets/img/Header/logo.png';
import NoAvatarIcon from 'src/assets/img/Header/no-avatar.png';
import { StyledAccount, StyledAvatar, StyledHeader, StyledHeaderGroup, StyledLogo, StyledUsername } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/"> 
        <StyledLogo src={LogoIcon}/>
      </Link>
      <StyledHeaderGroup>
        <Input/>
        <StyledAccount>
          <StyledAvatar src={NoAvatarIcon}/>
          <StyledUsername>Some Name</StyledUsername>
        </StyledAccount>
      </StyledHeaderGroup>
    </StyledHeader>
  );
};

export default Header;