import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center center;
  width: ${spacing.about.imageSize}px;
  height: ${spacing.about.imageSize}px;
  border-radius: 50%;
  margin-bottom: ${spacing.about.imageBottomMargin}px;
`;

const DisplayName = styled(Fonts.H2)`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`;

const CurrentJobTitle = styled(Fonts.H4)`
  margin: 0;
  color: ${(props) => props.color};
  text-align: center;
`;

const Summary = styled(Fonts.P)`
  margin-bottom: 0;
`;

const AboutMeSection = ({ about, jobTitleFontColor }) => (
  <AboutWrapper>
    <ProfileImageWrapper>
      <ProfileImage
        image={about.profileImage}
      />
    </ProfileImageWrapper>
    <DisplayName>{about.fullName}</DisplayName>
    <CurrentJobTitle color={jobTitleFontColor}>{about.primaryRole}</CurrentJobTitle>
    <Summary>
      {about.summary}
    </Summary>
  </AboutWrapper>
);

AboutMeSection.propTypes = {
  about: PropTypes.shape({
    profileImage: PropTypes.string,
    fullName: PropTypes.string,
    primaryRole: PropTypes.string,
  }),
  jobTitleFontColor: PropTypes.string,
};

export default AboutMeSection;
