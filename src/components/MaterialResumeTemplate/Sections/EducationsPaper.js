import React from 'react';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.education.verticalPadding;

const EducationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EducationWrapper = styled.div`
  ${(props) => !props.isFirst && `margin-top: ${props.verticalPadding / 2}px;`}
  ${(props) => !props.isLast && `margin-bottom: ${props.verticalPadding / 2}px;`}
`;

const EducationTitle = styled(Fonts.H3)`
  margin: 0;
`;

const EducationLocation = styled(Fonts.H4)`
  margin: 0;
  color: ${(props) => props.color};
`;

const EducationDate = styled(Fonts.H5)`
  margin: 0;
  display: flex;
  color: ${(props) => props.color};
`;

const EducationDateFrom = styled.div`
`;

const EducationDateSeparator = styled.div`
  padding: 0 ${spacing.education.datePadding}px;
`;

const EducationDateTo = styled.div`
`;

const EducationsPaper = ({ educations, locationFontColor, dateFontColor, ...props }) => (
  <EducationsWrapper>
    {educations.map((education, index) => (
      <EducationWrapper verticalPadding={VERTICAL_PADDING} isFirst={index === 0} isLast={index === educations.length - 1} key={index}>
        <EducationTitle>
          {education.title}
        </EducationTitle>
        <EducationLocation color={locationFontColor}>
          {education.location}
        </EducationLocation>
        <EducationDate color={dateFontColor}>
          <EducationDateFrom>
            {education.dateFrom}
          </EducationDateFrom>
          <EducationDateSeparator>
            -
          </EducationDateSeparator>
          <EducationDateTo>
            {education.dateTo}
          </EducationDateTo>
        </EducationDate>
      </EducationWrapper>
    ))}
  </EducationsWrapper>
);

EducationsPaper.propTypes = {
};

export default EducationsPaper;
