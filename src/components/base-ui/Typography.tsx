import { styled } from "styled-components";
interface TypographyProps {
  readonly $isFullWidth?: boolean;
}

const Typography = styled.button<TypographyProps>`
  font-size: 1em;
  padding: 0.5em 3em;
  border-radius: 4px;
  outline: none;
  width: ${(props) => (props.$isFullWidth ? "100%" : "fit-content")};
  color: ${(props) => props.theme.primary.dark};
  background: ${(props) => props.theme.text.primary};
`;

export default Typography;
