import React from "react";
import flatten from "lodash/flatten";
import PropTypes from "prop-types";
import styled from "styled-components";
import SkillScore from "../Utils/SkillScore";
import Fonts from "../Utils/Fonts";
import spacing from "../Utils/spacing";
import colors from "../Utils/colors";

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
  background: ${colors.blue};
  margin: 4px;
  color: ${colors.white};
  padding: 5px 5px;
  border-radius: 5px;
  font-size: 13px;
  text-align: center;
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
}) => {
  return (
    <SkillsWrapper>
      {flatten(
        skills.map(({ title, items }, i) => {
          return items;
        })
      ).map((item) => (
        <SkillWrapper>{item.name}</SkillWrapper>
      ))}
    </SkillsWrapper>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          scorePercentage: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  columnTitleColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
};

export default SkillsSection;
