import { FC } from "react";
import { StyledButton } from "./styled";
import { IButton } from "src/interfaces/components/IButton";

const Button: FC<IButton> = ({isGrey, children, callback}) => {
  return (
    <StyledButton $isGrey={isGrey} onClick={callback}>
      {children}
    </StyledButton>
  );
};

export default Button;
