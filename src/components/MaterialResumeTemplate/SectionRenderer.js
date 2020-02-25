import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Content,
  Title,
} from './Utils/Section';
import Paper from './Utils/Paper';
import colors from './Utils/colors';
import AboutMeSection from './Sections/AboutMeSection';
import SkillsSection from './Sections/SkillsSection';
import WorkExperiencesSection from './Sections/WorkExperiencesSection';
import ContactMeSection from './Sections/ContactMeSection';
import EducationsSection from './Sections/EducationsSection';
import AwardsSection from './Sections/AwardsSection';
import ReferencesSection from './Sections/ReferencesSection';
import HobbiesSection from './Sections/HobbiesSection';

const SectionRenderer = ({
  sectionName,
  resume: {
    about,
    professionalSkills,
    workExperiences,
    contact,
    educations,
    workEnvironment,
    awards,
    references,
    hobbies,
  },
}) => ({
  about: (
    <Paper>
      <Content>
        <AboutMeSection
          about={about}
          jobTitleFontColor={colors.grey700}
        />
      </Content>
    </Paper>
  ),
  professionalSkills: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Professional Skills
        </Title>
      </Header>
      <Content>
        <SkillsSection
          columnTitleColor={colors.blue}
          inactiveColor={colors.grey200}
          activeColor={colors.blue}
          skills={professionalSkills}
        />
      </Content>
    </Paper>
  ),
  workExperiences: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Working Experience
        </Title>
      </Header>
      <Content>
        <WorkExperiencesSection
          rolesFontColor={colors.grey700}
          dateFontColor={colors.blue}
          toolBgColor={colors.blue}
          toolFontColor={colors.white}
          partTimeBgColor={colors.orange}
          partTimeFontColor={colors.white}
          workExperiences={workExperiences}
        />
      </Content>
    </Paper>
  ),
  contact: (
    <Paper bgColor={colors.blue}>
      <Header>
        <Title color={colors.white}>
          Contact me
        </Title>
      </Header>
      <Content>
        <ContactMeSection
          iconFontColor={colors.blue}
          fontColor={colors.white}
          iconBgColor={colors.white}
          contact={contact}
        />
      </Content>
    </Paper>
  ),
  educations: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Education
        </Title>
      </Header>
      <Content>
        <EducationsSection
          locationFontColor={colors.fadedBlack}
          dateFontColor={colors.blue}
          educations={educations}
        />
      </Content>
    </Paper>
  ),
  workEnvironment: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Development Tools
        </Title>
      </Header>
      <Content>
        <SkillsSection
          columnTitleColor={colors.blue}
          inactiveColor={colors.grey200}
          activeColor={colors.blue}
          skills={workEnvironment}
        />
      </Content>
    </Paper>
  ),
  awards: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Awards
        </Title>
      </Header>
      <Content>
        <AwardsSection
          summaryColor={colors.grey700}
          awards={awards}
        />
      </Content>
    </Paper>
  ),
  references: (
    <Paper>
      <Header>
        <Title color={colors.blue}>
          References
        </Title>
      </Header>
      <Content>
        <ReferencesSection
          summaryColor={colors.grey700}
          references={references}
        />
      </Content>
    </Paper>
  ),
  hobbies: (
    <Paper>
      <Content>
        <HobbiesSection
          hobbies={hobbies}
        />
      </Content>
    </Paper>
  )
})[sectionName] || <div>Section {sectionName} not found!</div>;

SectionRenderer.propTypes = {
  sectionName: PropTypes.string.isRequired,
  resume: PropTypes.object.isRequired,
};

export default SectionRenderer;

