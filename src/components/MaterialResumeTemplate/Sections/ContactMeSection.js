import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope as MailIcon } from 'react-icons/fa';
import { FaPhone as PhoneIcon } from 'react-icons/fa';
import { FaLocationArrow as WebsiteIcon } from 'react-icons/fa';
import { FaMapMarker as LocationIcon } from 'react-icons/fa';
import { FaYoutube as YoutubeIcon } from 'react-icons/fa';
import spacing from '../Utils/spacing';
import Fonts from '../Utils/Fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};

  > div:not(:last-child) {
    margin-bottom: ${(props) => props.verticalPadding}px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.contact.iconPadding}px;
`;

const ContactText = styled(Fonts.A)`
  margin-left: ${spacing.contact.textPadding}px;
`;

const ICON_SIZE = spacing.contact.iconSize;
const VERTICAL_PADDING = spacing.contact.verticalPadding;

const ContactMeSection = ({ contact, fontColor, iconFontColor, iconBgColor }) => (
  <Wrapper color={fontColor} verticalPadding={VERTICAL_PADDING}>
    {
      contact.phoneNumber && (
        <ContactWrapper>
          <IconWrapper bgColor={iconBgColor} color={iconFontColor}>
            <PhoneIcon size={ICON_SIZE} />
          </IconWrapper>
          <ContactText href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</ContactText>
        </ContactWrapper>
      )
    }
    {
      contact.mail && (
        <ContactWrapper>
          <IconWrapper bgColor={iconBgColor} color={iconFontColor}>
            <MailIcon size={ICON_SIZE} />
          </IconWrapper>
          <ContactText href={`mailto:${contact.mail}`}>{contact.mail}</ContactText>
        </ContactWrapper>
      )
    }
    {
      contact.website &&
      <ContactWrapper>
        <IconWrapper bgColor={iconBgColor} color={iconFontColor}>
          <WebsiteIcon size={ICON_SIZE} />
        </IconWrapper>
        <ContactText href={contact.website} target="_blank">{contact.website}</ContactText>
      </ContactWrapper>
    }
    {
      contact.location &&
      <ContactWrapper>
        <IconWrapper bgColor={iconBgColor} color={iconFontColor}>
          <LocationIcon size={ICON_SIZE} />
        </IconWrapper>
        <ContactText>{contact.location}</ContactText>
      </ContactWrapper>
    }
    {
      contact.youtube &&
      <ContactWrapper>
        <IconWrapper bgColor={iconBgColor} color={iconFontColor}>
          <YoutubeIcon size={ICON_SIZE} />
        </IconWrapper>
        <ContactText href={`https://youtube.com/${contact.youtube}`} target="_blank">
          youtube.com/{contact.youtube}
        </ContactText>
      </ContactWrapper>
    }
  </Wrapper>
);

ContactMeSection.propTypes = {
  contact: PropTypes.shape({
    phoneNumber: PropTypes.string,
    mail: PropTypes.string,
    youtube: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
  }),
  fontColor: PropTypes.string.isRequired,
  iconFontColor: PropTypes.string.isRequired,
  iconBgColor: PropTypes.string.isRequired,
};

export default ContactMeSection;
