import React from "react";
import PropTypes from "prop-types";
import { Rating, Progress } from "semantic-ui-react";
import "./style.scss";

const SkillRating = ({ name, rating }) => (
  <div className="skill-rating">
    <div>{name}</div>
    <Progress value={rating} total={5} progress="ratio" />
  </div>
);

SkillRating.PropTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default SkillRating;
