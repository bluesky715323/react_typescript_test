import XIcon from "../../assets/x.svg?react";
import RArrowIcon from "../../assets/r_arrow.svg?react";
import EditIcon from "../../assets/edit.svg?react";
import ClockIcon from "../../assets/clock.svg?react";
import styled from "styled-components";

export const StyledXIcon = styled(XIcon)`
  path {
      fill: ${(props) => props.theme.primary.reverse};
  }
`;
export const StyledRArrowIcon = styled(RArrowIcon)`
  path {
      fill: ${(props) => props.theme.text.normal};
  }
`;
export const StyledEditIcon = styled(EditIcon)`
  path {
      fill: ${(props) => props.theme.text.normal};
  }
`;
export const StyledClockIcon = styled(ClockIcon)`
  path {
      fill: ${(props) => props.theme.primary.reverse};
  }
`;

// export const XIcon = ({ color="white", size="18" }) => (
//   <svg width={size} height={size} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512 810.666667 273.493333z"
//       fill="white"
//       stroke={color}
//       strokeWidth="0.4"
//     />
//   </svg>
// );