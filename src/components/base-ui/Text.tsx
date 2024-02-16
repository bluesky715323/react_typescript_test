import styled from 'styled-components'

type FontLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextProps = {
  $level?: FontLevel;
  $color?: string;
  $fontSize?: number | string;
  $fontWeight?: number | string;
  className?: string;
  style?: any;
  children?: any;
}

const UnstyledText: React.FC<TextProps> = ({ className, style, children}) => {
  return (
    <span
      className={className}
      style={{...style}}
    >
      {children}
    </span>
  )
}

const Text = styled(UnstyledText)<TextProps>`
  color: ${(props) => props.$color || props.theme.text.normal};
  font-size:  ${(props) => props.$fontSize || getFontSizeByLevel(props.$level)};
  font-weight:  ${(props) => props.$fontWeight || ''};
`

const getFontSizeByLevel = (level?:FontLevel) => {
  switch (level) {
    case 'h1':
      return '42pt';
    case 'h2':
      return '30pt';
    case 'h3':
      return '20pt';
    case 'h4':
      return '12pt';
    case 'h5':
      return '10pt';
    case 'h6':
      return '8pt';
  
    default:
      return '12pt';
  }
}

export default Text