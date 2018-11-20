import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "../sidebar";
import MainContent from "../main-content";
import "./style.css";

class CurriculumVitae extends Component {
  render = () => {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Column width={4} className="sidebar">
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <MainContent />
          </Grid.Column>
        </Grid>
      </div>
    );
  };
}

export default CurriculumVitae;
