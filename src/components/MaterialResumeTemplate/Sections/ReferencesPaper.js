import React from 'react';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.reference.verticalPadding;

const ReferencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReferenceWrapper = styled.div`
  ${(props) => !props.isFirst && `margin-top: ${props.verticalPadding / 2}px;`}
  ${(props) => !props.isLast && `margin-bottom: ${props.verticalPadding / 2}px;`}
`;

const ReferenceName = styled(Fonts.H3)`
  margin: 0;
`;

const ReferenceJobTitle = styled(Fonts.H5)`
  margin: 0;
  color: ${(props) => props.color};
`;

const ReferenceEmail = styled.div`
  display: flex;
  color: ${(props) => props.color};
`;

const ReferenceEmailLabel = styled(Fonts.H6)`
  margin: 0;
  margin-right: 5px;
`;


const ReferenceEmailValue = styled(Fonts.H6)`
  margin: 0;
`;

const ReferencesPaper = ({ references, summaryColor, ...props }) => (
  <ReferencesWrapper>
    {references.map((reference, index) => (
      <ReferenceWrapper verticalPadding={VERTICAL_PADDING} isFirst={index === 0} isLast={index === references.length - 1} key={index}>
        <ReferenceName>
          {reference.name}
        </ReferenceName>
        <ReferenceJobTitle color={summaryColor}>
          {reference.jobTitle}
        </ReferenceJobTitle>
        <ReferenceEmail color={summaryColor}>
          <ReferenceEmailLabel>Email:</ReferenceEmailLabel>
          <ReferenceEmailValue>{reference.email}</ReferenceEmailValue>
        </ReferenceEmail>
      </ReferenceWrapper>
    ))}
  </ReferencesWrapper>
);

ReferencesPaper.propTypes = {
};

export default ReferencesPaper;
