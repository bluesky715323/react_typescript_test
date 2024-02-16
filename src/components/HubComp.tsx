import { styled } from "styled-components";
import { StyledEditIcon } from "./base-ui/SvgIcons";
import Text from "./base-ui/Text";

interface HubProps {
  avatar?: string;
  uId?: string;
  editable?: boolean;
}

const CompContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primary.dark};
  height: 48px;
  border-radius: 8px;
  padding: 4px 8px;
  .avatar {
    width: 34px;
    height: 34px;
  }
  .color_txt_normal {
    flex: 1;
    padding: 0 10px;
    color: ${(props) => props.theme.text.normal};
  }
`;

const HubComp = ({avatar, uId, editable=false}:HubProps) => {
  return (
    <CompContent>
      {avatar && (
        <img className="avatar" src={avatar} />
      )}
      <Text className="color_txt_normal">{uId}</Text>
      {editable && (
        <StyledEditIcon width={18} height={18} />
      )}
    </CompContent>
  );
};

export default HubComp;