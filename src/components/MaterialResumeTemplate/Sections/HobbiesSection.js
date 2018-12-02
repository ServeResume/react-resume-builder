import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HobbieWrapper = styled.div`
  width: ${({ hobbies }) => (100 / hobbies.length) - 10}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
`;

const Image = styled.img`
  width: 100%;
`;

const HobbiesSection = ({ hobbies }) => (
  <Wrapper>
    {hobbies.map((hobby, index) => (
      <HobbieWrapper hobbies={hobbies} key={index}>
        <ImageWrapper>
          <Image src={hobby.image} />
        </ImageWrapper>
      </HobbieWrapper>
    ))}
  </Wrapper>
);

HobbiesSection.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default HobbiesSection;
