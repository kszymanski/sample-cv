import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import PersonalDetails from '../../blocks/personal-details';
import SkillsContainer from '../skills-container';

const Sidebar = () => (
  <div>
    <Image src="/images/harold.jpg" size="medium" />
    <PersonalDetails />
    <Divider />
    <SkillsContainer title="Languages" skills={myDetails.languages} />
    <Divider />
    <SkillsContainer
      title="Programming Skills"
      skills={myDetails.programmingSkills}
    />
  </div>
);

const myDetails = {
  languages: [
    {
      name: 'English',
      rating: 4
    },
    {
      name: 'German',
      rating: 3
    }
  ],
  programmingSkills: [
    {
      name: 'C#',
      rating: 4
    },
    {
      name: 'JavaScript',
      rating: 3
    },
    {
      name: 'OOP',
      rating: 3
    }
  ]
};

export default Sidebar;
