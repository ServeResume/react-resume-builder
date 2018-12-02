import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkillScore from '../Utils/SkillScore';
import Fonts from '../Utils/Fonts';
import spacing from '../Utils/spacing';

const VERTICAL_PADDING = spacing.skills.verticalPadding;
const HORIZONTAL_PADDING = spacing.skills.horizontalPadding;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${VERTICAL_PADDING / 2}px -${HORIZONTAL_PADDING / 2}px;
`;

const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${HORIZONTAL_PADDING / 2}px;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillTitle = styled(Fonts.H5)`
  margin: 0;
  flex-basis: 50%;
  margin-right: ${spacing.skills.titleRightMargin}px;
`;

const SkillColumnTitle = styled(Fonts.H5)`
  margin: 0;
  color: ${(props) => props.color};
`;

const SkillsSection = ({
  skills,
  columnTitleColor,
  activeColor,
  inactiveColor,
}) => (
  <SkillsWrapper>
    {skills.map(({ title, items }, i) => (
      <SkillColumn key={i}>
        {
          title && (
            <SkillColumnTitle color={columnTitleColor}>{title}</SkillColumnTitle>
          )
        }
        {items.map((skill, j) => (
          <SkillWrapper
            key={j}
          >
            <SkillTitle>
              {skill.name}
            </SkillTitle>
            <SkillScore
              inactiveColor={inactiveColor}
              activeColor={activeColor}
              percentage={skill.scorePercentage}
            />
          </SkillWrapper>
        ))}
      </SkillColumn>
    ))}
  </SkillsWrapper>
);

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      scorePercentage: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
  columnTitleColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
};

export default SkillsSection;
