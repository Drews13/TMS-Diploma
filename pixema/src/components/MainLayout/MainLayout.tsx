import { FC } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { StyledContent, StyledLayout, StyledMain } from "./styled";
import { IMainLayout } from "src/interfaces/components/IMainLayout";
import Filters from "../Filters";
import Loader from "../ui/Loader/Loader";
import { useSelector } from "react-redux";
import Modal from "../ui/Modal";
import Form from "../ui/Form";

const MainLayout: FC<IMainLayout> = ({children}) => {
  const isLoading = useSelector(({isLoading}) => isLoading);
  const modalVisibility = useSelector(({modalVisibility}) => modalVisibility);

  return (
    <StyledLayout>
      {isLoading && <Loader/>}
      {modalVisibility && 
        <Modal>
          <Form/>
        </Modal>
      }
      <Header/>
      <StyledContent>
        <Sidebar/>
        <StyledMain>
          {children}
        </StyledMain>
      </StyledContent>
      <Filters/>
    </StyledLayout>
  );
};

export default MainLayout;
