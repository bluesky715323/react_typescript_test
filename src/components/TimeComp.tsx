import { styled, useTheme } from "styled-components";
import Box from "./base-ui/Box";
import Spacebox from "./base-ui/Spacebox";
import { StyledClockIcon } from "./base-ui/SvgIcons";
import Text from "./base-ui/Text";

const CompContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primary.dark};
  height: 48px;
  border-radius: 8px;
  padding: 4px 8px;
`;

const TimeComp = () => {
  const theme = useTheme();
  return (
    <CompContent>
      <StyledClockIcon width={18} height={18}/>
      <Spacebox $width={16} />
      <Text $level="h5" $color={theme.text.primary}>Estimated time: </Text>
      <Spacebox $width={8} />
      <Text $level="h5" $color={theme.text.primary} $fontWeight="bold">20 seconds</Text>
    </CompContent>
  );
};

export default TimeComp;