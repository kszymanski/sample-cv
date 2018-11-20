import React from "react";
import { Header, List } from "semantic-ui-react";
import "./style.scss";

const Interests = () => (
  <div>
    <Header>Interests</Header>
    <List bulleted className="interest-list">
      <List.Item>History</List.Item>
      <List.Item>Literature</List.Item>
      <List.Item>Video games</List.Item>
    </List>
  </div>
);

export default Interests;
