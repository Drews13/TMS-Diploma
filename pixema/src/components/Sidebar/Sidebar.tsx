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

const Sidebar = () => {

  return (
    <StyledSideBar>
      <StyledList>
        <NavLink to="/" icon={HomeIcon} iconActive={HomeActiveIcon} text="Home"/>
        <NavLink to="/a" icon={TrendsIcon} iconActive={TrendsActiveIcon} text="Trends"/>
        <NavLink to="/b" icon={FavoritesIcon} iconActive={FavoritesActiveIcon} text="Favorites"/>
        <NavLink to="/c" icon={SettingIcon} iconActive={SettingActiveIcon} text="Settings"/>
      </StyledList>
      <StyledCopyright>© All Rights Reserved</StyledCopyright>
    </StyledSideBar>
  );
};

export default Sidebar;
