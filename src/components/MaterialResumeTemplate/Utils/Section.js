import styled from 'styled-components';
import Fonts from './Fonts';
import spacings from './spacing';

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${spacings.verticalPadding}px ${spacings.horizontalPadding}px;
`;

export const Title = styled(Fonts.H2)`
  margin: 0;
  color: ${(props) => props.color};
`;

export const Content = styled.div`
  padding: ${spacings.verticalPadding}px ${spacings.horizontalPadding}px;
  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.height && `height: ${props.height}px;`}
`;
