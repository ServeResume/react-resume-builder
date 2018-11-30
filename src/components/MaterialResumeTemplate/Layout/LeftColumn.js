import React from 'react';
import Paper from '../Utils/Paper';
import ContactMePaper from '../Sections/ContactMePaper';
import EducationsPaper from '../Sections/EducationsPaper';
import SkillsPaper from '../Sections/SkillsPaper';
import AwardsPaper from '../Sections/AwardsPaper';
import ReferencesPaper from '../Sections/ReferencesPaper';
import HobbiesPaper from '../Sections/HobbiesPaper';
import colors from '../Utils/colors';
import {
  Header,
  Content,
  Title,
} from '../Utils/Section';

export default ({
  contact,
  educations,
  workEnvironment,
  references,
  hobbies,
  awards,
}) => (
  <React.Fragment>
    {/* Contact me */}
    <Paper bgColor={colors.blue}>
      <Header>
        <Title color={colors.white}>
          Contact me
        </Title>
      </Header>
      <Content>
        <ContactMePaper
          iconFontColor={colors.blue}
          fontColor={colors.white}
          iconBgColor={colors.white}
          contact={contact}
        />
      </Content>
    </Paper>
    {/* Education paper */}
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Education
        </Title>
      </Header>
      <Content>
        <EducationsPaper
          locationFontColor={colors.fadedBlack}
          dateFontColor={colors.blue}
          educations={educations}
        />
      </Content>
    </Paper>
    {/* Work environment */}
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Development Tools
        </Title>
      </Header>
      <Content>
        <SkillsPaper
          columnTitleColor={colors.blue}
          inactiveColor={colors.grey200}
          activeColor={colors.blue}
          skills={workEnvironment}
        />
      </Content>
    </Paper>
    {/* Awards */}
    <Paper>
      <Header>
        <Title color={colors.blue}>
          Awards
        </Title>
      </Header>
      <Content>
        <AwardsPaper
          summaryColor={colors.grey700}
          awards={awards}
        />
      </Content>
    </Paper>
    {/* References */}
    <Paper isLast>
      <Header>
        <Title color={colors.blue}>
          References
        </Title>
      </Header>
      <Content>
        <ReferencesPaper
          summaryColor={colors.grey700}
          references={references}
        />
      </Content>
    </Paper>
    {/* Hobbies paper */}
    <Paper isLast>
      <Content>
        <HobbiesPaper
          hobbies={hobbies}
        />
      </Content>
    </Paper>
  </React.Fragment>
);
