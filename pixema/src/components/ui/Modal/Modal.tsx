import { FC, useEffect, useRef } from "react";
import { StyledModal, StyledModalWrapper } from "./styled";
import { IModal } from "src/interfaces/components/IModal";
import { SET_MODAL_VISIBILITY_CREATOR } from "src/actions/actions";
import { useDispatch } from "react-redux";

const Modal: FC<IModal> = ({children}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleClickOutside = ({target}: MouseEvent): void => {
    if (target instanceof Node && !modalRef.current?.contains(target)) {
      dispatch(SET_MODAL_VISIBILITY_CREATOR());
    }
  };

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.addEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <StyledModalWrapper ref={wrapperRef}>
      <StyledModal ref={modalRef}>
        {children}
      </StyledModal>
    </StyledModalWrapper>
  );
};

export default Modal;