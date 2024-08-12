import { FC, useState } from "react";
import { useMatch } from "react-router-dom";
import { INavLink } from "src/interfaces/components/INavLink";
import { StyledNavLink, StyledNavLinkActive, StyledNavLinkIcon, StyledNavLinkText } from "./styled";

const NavLink: FC<INavLink> = ({to, icon, iconActive, text}) => {
  const [displayedIcon, setDisplayedIcon] = useState<string>(icon);
  const match = useMatch(to);
  return (
    <>
      {
        match ? 
          <StyledNavLinkActive to={to}>
            <StyledNavLinkIcon src={iconActive}/>
            <StyledNavLinkText>{text}</StyledNavLinkText>
          </StyledNavLinkActive> 
        :
          <StyledNavLink to={to} onMouseOver={() => setDisplayedIcon(iconActive)} onMouseOut={() => setDisplayedIcon(icon)}>
            <StyledNavLinkIcon src={displayedIcon}/>
            <StyledNavLinkText>{text}</StyledNavLinkText>
          </StyledNavLink>
      }
    </>
  );
};

export default NavLink;