import React from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import Timeline from '../../blocks/timeline';

const MainContent = () => (
  <div>
    <Container text>
      <Header as="h2">About me</Header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
    </Container>
    <Divider />
    <Container text>
      <Timeline
        title="Professional experience"
        timeline={myDetails.professionalExperience}
      />
    </Container>
    <Divider />
    <Container text>
      <Timeline title="Education" timeline={myDetails.educationHistory} />
    </Container>
  </div>
);

const myDetails = {
  professionalExperience: [
    {
      from: '2015',
      to: 'present',
      description: 'Senior .NET developer at Future Processing'
    },
    {
      from: '2014',
      to: '2015',
      description: '.NET developer at Programex'
    },
    {
      from: '2010',
      to: '2014',
      description: 'Junior .NET developer at SoftPol'
    }
  ],
  educationHistory: [
    {
      from: '2011',
      to: '2014',
      description: 'Silesian University of Technology - Computer Science'
    },
    {
      from: '2008',
      to: '2011',
      description: 'High School A. Frycza-Modrzewskiego in Rybnik'
    }
  ]
};

export default MainContent;
