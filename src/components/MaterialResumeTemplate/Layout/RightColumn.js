import React from 'react';
import Paper from '../Utils/Paper';
import {
  Header,
  Content,
  Title,
} from '../Utils/Section';
import SkillsPaper from '../Sections/SkillsPaper';
import JobsPaper from '../Sections/JobsPaper';
import colors from '../Utils/colors';
import AboutMePaper from '../Sections/AboutMePaper';

export default ({
  about,
  skills,
  jobs,
  references,
}) => (
  <React.Fragment>
    {/* About */}
    <Paper>
      <Content>
        <AboutMePaper
          about={about}
          jobTitleFontColor={colors.grey700}
        />
      </Content>
    </Paper>
      {/* Skills paper */}
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Professional Skills
        </Title>
      </Header>
      <Content>
        <SkillsPaper
          columnTitleColor={colors.blue}
          inactiveColor={colors.grey200}
          activeColor={colors.blue}
          skills={skills}
        />
      </Content>
    </Paper>
      {/* Working experience paper */}
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Working Experience
        </Title>
      </Header>
      <Content>
        <JobsPaper
          rolesFontColor={colors.grey700}
          dateFontColor={colors.blue}
          toolBgColor={colors.blue}
          toolFontColor={colors.white}
          partTimeBgColor={colors.orange}
          partTimeFontColor={colors.white}
          jobs={jobs}
        />
      </Content>
    </Paper>
  </React.Fragment>
);
