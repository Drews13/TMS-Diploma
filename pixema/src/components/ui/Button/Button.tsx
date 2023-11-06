import { FC } from "react";
import { StyledButton } from "./styled";
import { IButton } from "src/interfaces/components/IButton";

const Button: FC<IButton> = ({isGrey, children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default Button;
