import { styled } from "styled-components";

const Spacebox = styled.div<{$width: number|string, $height: number|string}>`
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
`;

export default Spacebox;
