import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import spacing from './Utils/spacing';
import colors from './Utils/colors';
import SectionRenderer from './SectionRenderer';

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  background: #EDEDED;
  font-size: 14px;
  padding: ${spacing.verticalPadding / 2}px ${spacing.horizontalPadding}px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.color};
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${spacing.firstColumnWidth}%;
  margin-right: ${spacing.horizontalPadding}px;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${100 - spacing.firstColumnWidth}%;
`;

const MaterialResumeTemplate = (resume) => (
  <Wrapper color={colors.black}>
    <FirstColumn>
      {
        [
          'contact',
          'educations',
          'workEnvironment',
          'awards',
          'references',
          'hobbies',
        ].map(sectionName => (
          <SectionRenderer
            key={sectionName}
            sectionName={sectionName}
            resume={resume}
          />
        ))
      }
    </FirstColumn>
    <SecondColumn>
      {
        [
          'about',
          'professionalSkills',
          'workExperiences',
        ].map(sectionName => (
          <SectionRenderer
            key={sectionName}
            sectionName={sectionName}
            resume={resume}
          />
        ))
      }
    </SecondColumn>
  </Wrapper>
);

MaterialResumeTemplate.propTypes = {
  resume: PropTypes.object,
};

export default MaterialResumeTemplate;
