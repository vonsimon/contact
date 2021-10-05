import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      My name is Simon Vonlanthen, I am a developer with a focus on React, Node and Express. I am skilled in HTML, Javascript and CSS.
      </SectionText>
    </LeftSection>
 </Section>
);

export default Hero;