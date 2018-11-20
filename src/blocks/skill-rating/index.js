import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react'
import './style.css'


const SkillRating = ({ name, rating }) => (
    <div className='skill-rating'>
        <div>{name}</div>
        <Rating defaultRating={rating} maxRating={5} disabled />
    </div>
)

SkillRating.PropTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default SkillRating;