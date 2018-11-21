import React, { Component } from "react";
import { Container, Divider, Sticky, List } from "semantic-ui-react";
import Timeline from "./blocks/timeline";
import ConsentNote from "./blocks/consent-note";
import PersonalDetails from "./blocks/personal-details";
import SkillsContainer from "./components/skills-container";
import ProjectList from "./components/project-list";
import Interests from "./blocks/interests";

import "./App.scss";

import DynamicHeader from "./headers/DynamicHeader";

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    // console.log(contextRef);
    this.setState({ contextRef });
  };

  render() {
    const { contextRef } = this.state;
    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                <PersonalDetails />
                <Divider />
                <SkillsContainer
                  title="Languages"
                  skills={myDetails2.languages}
                />
                <Divider />
                <SkillsContainer
                  title="Programming Skills"
                  skills={myDetails2.programmingSkills}
                />
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            <Container text>
              <p>
                Na co dzień Senior Web Developer, ale mówi o sobie Inżynier
                Oprogramowania, bo liczy się dostarczanie wartości, nie ważne
                czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future
                Processing, po godzinach z pasją rozwijając swoje umiejętności w
                hobbystycznych projektach. Frontend to dla niego chleb
                powszedni, z Angularem idzie za pan brat od wersji 1.2 po
                dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.
              </p>
              <Divider />
              <Timeline
                title="Professional experience"
                timeline={myDetails.professionalExperience}
              />
              <Divider />
              <Timeline
                title="Education"
                timeline={myDetails.educationHistory}
              />
              <Divider />
              <Timeline
                title="Other activities"
                timeline={myDetails.otherActivities}
              />
              <Divider />
              <ProjectList githubAccountName={myDetails.githubAccountName} />
              <Divider />
              <Interests />
              <Divider />
              <ConsentNote />
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
const myDetails2 = {
  languages: [
    {
      name: "English",
      rating: 4
    },
    {
      name: "German",
      rating: 3
    }
  ],
  programmingSkills: [
    {
      name: "C#",
      rating: 4
    },
    {
      name: "JavaScript",
      rating: 3
    },
    {
      name: "OOP",
      rating: 3
    }
  ]
};
const myDetails = {
  githubAccountName: "kszymanski",
  professionalExperience: [
    {
      from: "2015",
      to: "present",
      description: "Senior .NET developer at Future Processing"
    },
    {
      from: "2014",
      to: "2015",
      description: ".NET developer at Programex"
    },
    {
      from: "2010",
      to: "2014",
      description: "Junior .NET developer at SoftPol"
    }
  ],
  educationHistory: [
    {
      from: "2011",
      to: "2014",
      description: "Silesian University of Technology - Computer Science"
    },
    {
      from: "2008",
      to: "2011",
      description: "High School A. Frycza-Modrzewskiego in Rybnik"
    }
  ],
  otherActivities: [
    {
      from: "2013",
      to: "present",
      description: "Writing and maintaning a blog at www.elo.pl"
    }
  ]
};
