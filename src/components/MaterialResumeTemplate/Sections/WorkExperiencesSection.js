import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck as CheckIcon } from 'react-icons/md';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.jobs.verticalPadding;

const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobWrapper = styled.div`
  ${(props) => !props.isFirst && `margin-top: ${VERTICAL_PADDING / 2}px;`}
  ${(props) => !props.isLast && `margin-bottom: ${VERTICAL_PADDING / 2}px;`}
`;

const JobTitleWrapper = styled.div`
  display: flex;
`;

const JobTitle = styled(Fonts.H3)`
  display: flex;
  align-items: center;
  margin: 0;
`;

const PartTime = styled(Fonts.H6)`
  margin: 0 10px;
  margin-left: 10px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 2px 10px;
`;

const JobDate = styled(Fonts.H5)`
  margin: 0;
  display: flex;
  color: ${(props) => props.color};
`;

const JobDateFrom = styled.div`
`;

const JobDateSeparator = styled.div`
  padding: 0 ${spacing.jobs.datePadding}px;
`;

const JobDateTo = styled.div`
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobHeaderLeft = styled.div`
`;

const JobHeaderRight = styled.div`
`;

const JobRoles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const JobRole = styled.li`
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  margin: 0;
  color: ${(props) => props.color};
`;

const JobRoleCheck = styled.div`
  margin-top: 5px;
  margin-right: ${spacing.jobs.checkPadding}px;
`;

const JobRoleText = styled(Fonts.P)`
  margin: 0;
`;

const JobToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${spacing.jobs.toolsTopMargin}px;
`;

const JobToolLogoWrapper = styled(Fonts.P)`
  margin: 0;
  margin-right: ${spacing.jobs.toolRightMargin}px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 2px 5px;
`;

const addDot = (str) => str.indexOf('.') < str.length - 1 ? `${str}.` : `${str}`;

const WorkExperiencesSection = ({
  workExperiences,
  rolesFontColor,
  dateFontColor,
  toolBgColor,
  toolFontColor,
  partTimeBgColor,
  partTimeFontColor,
}) => (
  <JobsWrapper>
    {workExperiences.map((workExperience, index) => (
      <JobWrapper
        isFirst={index === 0}
        isLast={index === workExperiences.length - 1}
        key={index}
      >
        <JobHeader>
          <JobHeaderLeft>
            <JobTitleWrapper>
              <JobTitle>
                {workExperience.subtitle} at {workExperience.title}
              </JobTitle>
              {
                workExperience.partTime &&
                <PartTime bgColor={partTimeBgColor} color={partTimeFontColor}>{`part-time`}</PartTime>
              }
            </JobTitleWrapper>
            <JobDate color={dateFontColor}>
              <JobDateFrom>
                {workExperience.dateFrom}
              </JobDateFrom>
              <JobDateSeparator>
                -
              </JobDateSeparator>
              <JobDateTo>
                {workExperience.dateTo}
              </JobDateTo>
            </JobDate>
          </JobHeaderLeft>
          <JobHeaderRight>
          </JobHeaderRight>
        </JobHeader>
        <JobRoles>
          {workExperience.roles.map((role, index) => (
            <JobRole color={rolesFontColor} key={index}>
              <JobRoleCheck>
                <CheckIcon size={15} />
              </JobRoleCheck>
              <JobRoleText>{addDot(role)}</JobRoleText>
            </JobRole>
          ))}
        </JobRoles>
        <JobToolsWrapper>
          {workExperience.tools.map((tool, index) => (
            <JobToolLogoWrapper
              bgColor={toolBgColor}
              color={toolFontColor}
              key={index}
            >
              {tool}
            </JobToolLogoWrapper>
          ))}
        </JobToolsWrapper>
      </JobWrapper>
    ))}
  </JobsWrapper>
);

WorkExperiencesSection.propTypes = {
  workExperiences: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    partTime: PropTypes.bool,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  rolesFontColor: PropTypes.string.isRequired,
  dateFontColor: PropTypes.string.isRequired,
  toolBgColor: PropTypes.string.isRequired,
  toolFontColor: PropTypes.string.isRequired,
  partTimeBgColor: PropTypes.string.isRequired,
  partTimeFontColor: PropTypes.string.isRequired,
};

export default WorkExperiencesSection;
