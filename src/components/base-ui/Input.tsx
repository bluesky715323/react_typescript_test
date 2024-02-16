import { styled } from "styled-components";
interface InputProps {
  readonly $isFullWidth?: boolean;
}

const Input = styled.button<InputProps>`
  font-size: 1em;
  padding: 0.5em 3em;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  width: ${(props) => (props.$isFullWidth ? "100%" : "fit-content")};
  color: ${(props) => props.theme.primary.dark};
  background: ${(props) => props.theme.text.primary};
`;

export default Input;
