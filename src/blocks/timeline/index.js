import React from 'react';
import { List, Header } from 'semantic-ui-react';
import TimelineItem from '../timeline-item';
import PropTypes from 'prop-types';

const Timeline = ({ title, timeline }) => (
  <div>
    <Header>{title}</Header>
    <List>
      {timeline.map(item => (
        <TimelineItem
          from={item.from}
          to={item.to}
          description={item.description}
        />
      ))}
    </List>
  </div>
);

Timeline.PropTypes = {
  timeline: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Timeline;
