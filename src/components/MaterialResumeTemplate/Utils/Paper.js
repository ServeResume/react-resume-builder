import styled from 'styled-components';
import PropTypes from 'prop-types';
import spacing from './spacing';
import colors from './colors';

const Paper = styled.div`
  background: ${(props) => props.bgColor};
  ${(props) => props.color && `color: ${props.color};`}
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-top: ${spacing.verticalPadding / 2}px;
  margin-bottom: ${spacing.verticalPadding / 2}px;
`;

Paper.defaultProps = {
  bgColor: colors.white,
};

Paper.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Paper;
