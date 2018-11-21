import React, { Component } from "react";
import { Header, Card } from "semantic-ui-react";
import PropTypes from "prop-types";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount = () => {
    fetch(
      `https://api.github.com/users/${
        this.props.githubAccountName
      }/repos?type=owner&sort=updated`
    )
      .then(res => res.json())
      .then(data => this.setState({ projects: data }));
  };

  render = () => {
    const { projects } = this.state;
    const githubLink = `https://github.com/${this.props.githubAccountName}`;

    return (
      <div>
        <Header>
          My current projects (see my <a href={githubLink}>github</a>)
        </Header>
        <Card.Group itemsPerRow={3}>
          {projects
            .filter(p => !p.fork)
            .slice(0, 6)
            .map(p => (
              <Card
                key={p.id}
                href={p.html_url}
                header={p.name}
                meta={p.language}
              />
            ))}
        </Card.Group>
      </div>
    );
  };
}

ProjectList.propTypes = {
  githubAccountName: PropTypes.string.isRequired
};

export default ProjectList;
