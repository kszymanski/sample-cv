import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

const SkillRating = ({ name, rating }) => (
  <div className="skill-rating">
    <div>{name}</div>
    <Progress value={rating} total={5} progress="ratio" />
  </div>
);

SkillRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default SkillRating;
