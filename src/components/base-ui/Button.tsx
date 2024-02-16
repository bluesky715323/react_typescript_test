import { styled } from "styled-components";
interface ButtonProps {
  readonly $isFullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  font-size: 1em;
  padding: 0.5em 3em;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  height: 48px;
  width: ${(props) => (props.$isFullWidth ? "100%" : "fit-content")};
  color: ${(props) => props.theme.primary.main};
  background: ${(props) => props.theme.primary.reverse};
`;

export default Button;
