import { styled } from "styled-components";
import { StyledXIcon, StyledRArrowIcon } from "./base-ui/SvgIcons";
import Button from "./base-ui/Button";
import Box from "./base-ui/Box";
import Text from "./base-ui/Text";
import HubComp from "./HubComp";
import Spacebox from "./base-ui/Spacebox";
import SelAmountComp from "./SelAmountComp";
import TimeComp from "./TimeComp";
interface ModalProps {
  readonly $isOpen?: boolean;
  onClose: ()=>void;
  title?: string;
  strOk?: string;
  strCancel?: string;
}

// const Modal = styled.div`
//   padding: 1em;
//   border-radius: 8px;
//   background: ${(props) => props.theme.primary.main};
//   width: fit-content;
// `;

const ModalWrapper = styled.div<ModalProps>`
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.primary.main};
  min-width: 500px;
  width: fit-content;
  height: null;
  margin: 100px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  .color_revrese {
    color: ${(props) => props.theme.text.primary};
  }
  .color_txt_normal {
    color: ${(props) => props.theme.text.normal};
  }
  .close_icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${(props) => props.theme.primary.dark_light};
    cursor: pointer;
  }

  .hub_wrap {
    flex: 1
  }
  .r_arrow {
    height: 34px;
    padding: 0 4px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    .btn_cancel {
      color: ${(props) => props.theme.text.normal};
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

// const StyledXIcon = styled(XIcon)`
//   color: ${(props) => props.theme.primary.reverse};
// `;

const Modal = ({$isOpen, onClose, title="", strOk="Ok", strCancel="Cancel" }: ModalProps) => {
  const handleClick = ()=>{
    console.log("handle click")
  };
  return (
    <ModalWrapper $isOpen={$isOpen} onClick={onClose}>
      <ModalContent onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}>
        {/* title bar */}
        <Box $display="flex" $justifyContent="space-between" $alignItems="center">
          <Text $level="h3" className="color_revrese" >{title}</Text>
          <Box className="close_icon" onClick={onClose}>
            <StyledXIcon width={18} height={18}/>
          </Box>
        </Box>
        <Spacebox $height={20} />
        
        {/* content - hub */}
        <Box $display="flex" $alignItems="end">
          <Box className="hub_wrap">
            <Text $level="h5" className="color_txt_normal">From Cosmos Hub</Text>
            <Spacebox $height={8}/>
            <HubComp avatar="avatar_from.png" uId="abcdefg...123456" />
          </Box>
          <Box className="r_arrow">
            <StyledRArrowIcon width={18} height={18}/>
          </Box>
          <Box className="hub_wrap">
            <Text $level="h5" className="color_txt_normal">To Osmosis</Text>
            <Spacebox $height={8}/>
            <HubComp avatar="avatar_to.png" uId="123456...abcedfg" editable />
          </Box>
        </Box>
        <Spacebox $height={30} />

        {/* content-select amount */}
        <SelAmountComp available={2} avatar="avatar_from.png" />
        <Spacebox $height={30} />

        {/* content - time */}
        <TimeComp/>
        <Spacebox $height={30} />
        
        {/* bottom buttons */}
        <Box className="btns">
          <Button $isFullWidth onClick={onClose}>{strOk}</Button>
          <Box className="btn_cancel" onClick={onClose}>{strCancel}</Box>
        </Box>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
