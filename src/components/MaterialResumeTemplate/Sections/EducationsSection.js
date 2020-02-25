import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.education.verticalPadding;

const EducationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EducationWrapper = styled.div`
  ${(props) => !props.isFirst && `margin-top: ${VERTICAL_PADDING / 2}px;`}
  ${(props) => !props.isLast && `margin-bottom: ${VERTICAL_PADDING / 2}px;`}
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

const EducationsSection = ({
  educations,
  locationFontColor,
  dateFontColor,
}) => (
  <EducationsWrapper>
    {educations.map((education, index) => (
      <EducationWrapper
        isFirst={index === 0}
        isLast={index === educations.length - 1}
        key={index}
      >
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

EducationsSection.propTypes = {
  dateFontColor: PropTypes.string.isRequired,
  locationFontColor: PropTypes.string.isRequired,
  educations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
  })).isRequired,
};

export default EducationsSection;
