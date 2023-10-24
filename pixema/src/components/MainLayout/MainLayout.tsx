import { FC } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { StyledContent, StyledLayout, StyledMain } from "./styled";
import { IMainLayout } from "src/interfaces/components/IMainLayout";

const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <StyledLayout>
      <Header/>
      <StyledContent>
        <Sidebar/>
        <StyledMain>
          {children}
        </StyledMain>
      </StyledContent>
    </StyledLayout>
  );
};

export default MainLayout;
