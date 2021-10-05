import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2012', text: 'Bachelor of Arts - German Studies'},
  { number: '2014', text: 'Master of Arts - Media & Cultural Studies', },
  { number: '2021', text: 'Web and App Development - WBS Coding School', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card, index) => (
       <Box key={index}>
     <BoxNum>{card.number}</BoxNum>
     <BoxText>{card.text}</BoxText>
     </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
