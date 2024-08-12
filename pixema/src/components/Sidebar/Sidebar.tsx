import { StyledCopyright, StyledList, StyledSideBar } from "./styled";
import NavLink  from "../ui/NavLink";
import HomeIcon from 'src/assets/img/SideBar/home.png';
import HomeActiveIcon from 'src/assets/img/SideBar/home-active.png';
import TrendsIcon from 'src/assets/img/SideBar/trends.png';
import TrendsActiveIcon from 'src/assets/img/SideBar/trends-active.png';
import FavoritesIcon from 'src/assets/img/SideBar/favorites.png';
import FavoritesActiveIcon from 'src/assets/img/SideBar/favorites-active.png';
import SettingIcon from 'src/assets/img/SideBar/setting.png';
import SettingActiveIcon from 'src/assets/img/SideBar/setting-active.png';
import { ROUTE_FAVORITES, ROUTE_SETTINGS, ROUTE_TRENDS } from "src/constants/Routes";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const userData = useSelector(({userData}) => userData);

  return (
    <StyledSideBar>
      <StyledList>
        <NavLink to="/" icon={HomeIcon} iconActive={HomeActiveIcon} text="Home"/>
        <NavLink to={ROUTE_TRENDS} icon={TrendsIcon} iconActive={TrendsActiveIcon} text="Trends"/>
        {!!userData && <NavLink to={ROUTE_FAVORITES} icon={FavoritesIcon} iconActive={FavoritesActiveIcon} text="Favorites"/>}
        {!!userData && <NavLink to={ROUTE_SETTINGS} icon={SettingIcon} iconActive={SettingActiveIcon} text="Settings"/>}
      </StyledList>
      <StyledCopyright>© All Rights Reserved</StyledCopyright>
    </StyledSideBar>
  );
};

export default Sidebar;
