import React from 'react';
import SkillRating from '../../blocks/skill-rating';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SkillsContainer = ({title, skills}) => (
    <div>
        <Header>{title}</Header>
        {skills.map(s => <SkillRating name={s.name} rating={s.rating}/>)}
    </div>
)

SkillsContainer.PropTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
}

export default SkillsContainer;