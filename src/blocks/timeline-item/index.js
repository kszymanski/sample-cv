import React from "react";
import { List, Header, Grid } from "semantic-ui-react";
import "./style.css";

const TimelineItem = ({ from, to, description }) => (
  <div>
    <List.Item>
      <Grid>
        <Grid.Column width={4}>
          <Header>
            {from}-{to}:
          </Header>
        </Grid.Column>
        <Grid.Column className="description" width={10}>
          {description}
        </Grid.Column>
      </Grid>
    </List.Item>
  </div>
);

export default TimelineItem;
