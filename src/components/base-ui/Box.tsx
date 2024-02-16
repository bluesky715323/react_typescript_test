import { styled } from "styled-components";
interface BoxProps {
  $flex?: number;
  $color?: string;
  $bgcolor?: string;
  $display?: "flex" | "block";
  $justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  $alignItems?: "flex-start" | "center" | "flex-end";
  $width?: number | string;
  $height?: number | string;
  $border?: string;
  $borderRadius?: number | string;
  className?: string;
  style?: any;
  children?: any;
  onClick: () => void;
}

const UnstyledBox: React.FC<BoxProps> = ({className, style, onClick, children}) => {
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    >{children}</div>
  );
}

const Box = styled(UnstyledBox)<BoxProps>`
  flex: ${(props) => props.$flex || ''};
  display: ${(props) => props.$display || ''};
  justify-content: ${(props) => props.$justifyContent || ''};
  align-items: ${(props) => props.$alignItems || ''};
  width: ${(props) =>
    props.$width
      ? typeof props.$width === "number"
        ? props.$width + "px"
        : props.$width
      : "auto"};
  height: ${(props) =>
    props.$height
      ? typeof props.$height === "number"
        ? props.$height + "px"
        : props.$height
      : "auto"};
  color: ${(props) => props.$color || props.theme.text.primary};
  background: ${(props) => props.$bgcolor || props.theme.primary.main};
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) =>
    props.$borderRadius
      ? typeof props.$borderRadius === "number"
        ? props.$borderRadius + "px"
        : props.$borderRadius
      : "0"};
`;

export default Box;
