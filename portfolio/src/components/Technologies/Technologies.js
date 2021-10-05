import React from 'react';
import { DiFirebase, DiNodejs, DiNodejsSmall, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle>
  <br />
     Technologies</SectionTitle>
   <SectionText>
    I've worked with a range of technologies in the web development world. From Back-end to Front-End
   </SectionText>
   <List>
     <ListItem>
       <DiReact size ="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiNodejsSmall size ="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           Node.js 
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size ="3rem" />
       <ListContainer>
         <ListTitle>Databases</ListTitle>
         <ListParagraph>
           Experience with <br />
           SQL and NoSQL
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>

  
 </Section>
);

export default Technologies;
