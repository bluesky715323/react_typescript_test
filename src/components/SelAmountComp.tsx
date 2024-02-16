import { styled, useTheme } from "styled-components";
import Box from "./base-ui/Box";
import Spacebox from "./base-ui/Spacebox";
import Text from "./base-ui/Text";

interface SelAmountProps {
  available?: number;
  avatar?: string;
}

const CompContent = styled.div`
`;

const CompTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CompMiddle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border.normal};
  border-radius: 8px;
  .avatar {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-right: 1px solid ${(props) => props.theme.border.normal};
  }
  .amount_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
`;

const CompBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .amount_tag {
    background-color: ${(props)=>props.theme.primary.dark_light};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const SelAmountComp = ({available, avatar}:SelAmountProps) => {
  const theme = useTheme();
  return (
    <CompContent>
      <CompTop>
        <Text>Select amount</Text>
        <Box $display="flex" $alignItems="center">
          <Text $level="h5">Avaliable</Text>
          <Spacebox $width={6}/>
          <Text $level="h5" $color={theme.text.primary}>{available} ATOM</Text>
        </Box>
      </CompTop>
      <Spacebox $height={10} />
      <CompMiddle>
        <img className="avatar" src={avatar} />
        <Box className="amount_wrap">
          <Text $color={theme.text.primary}>{available}</Text>
          <Box $display="flex" $alignItems="center">
            <Text $color={theme.text.primary} $level="h5">ATOM</Text>
            <Spacebox $width={8}/>
            <Text $level="h5"> = $1,013</Text>
          </Box>
        </Box>
      </CompMiddle>
      <Spacebox $height={10} />
      <CompBottom>
        <Box className="amount_tag">Max</Box>
        <Spacebox $width={8}/>
        <Box className="amount_tag">1/2</Box>
        <Spacebox $width={8}/>
        <Box className="amount_tag">1/3</Box>
      </CompBottom>

    </CompContent>
  );
};

export default SelAmountComp;