import React from 'react';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.award.verticalPadding;

const AwardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AwardWrapper = styled.div`
  ${(props) => !props.isFirst && `margin-top: ${props.verticalPadding / 2}px;`}
  ${(props) => !props.isLast && `margin-bottom: ${props.verticalPadding / 2}px;`}
`;

const AwardTitle = styled(Fonts.H3)`
  margin: 0;
`;

const AwardSummary = styled(Fonts.P)`
  margin: 0;
  color: ${(props) => props.color};
`;

const AwardsPaper = ({ awards, summaryColor, ...props }) => (
  <AwardsWrapper>
    {awards.map((award, index) => (
      <AwardWrapper verticalPadding={VERTICAL_PADDING} isFirst={index === 0} isLast={index === awards.length - 1} key={index}>
        <AwardTitle>
          {award.jobTitle}
        </AwardTitle>
        <AwardSummary color={summaryColor}>
          {award.summary}
        </AwardSummary>
      </AwardWrapper>
    ))}
  </AwardsWrapper>
);

AwardsPaper.propTypes = {
};

export default AwardsPaper;
