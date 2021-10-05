import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel: 0176-45811640">0176-45811640</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:svonlanthen@gmx.net">svonlanthen@gmx.net</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Coding is my profession and my hobby</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href= "https://github.com/vonsimon">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href= "https://www.linkedin.com/in/simon-vonlanthen-a8232413b">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
