import React, { Component } from 'react';
import { Rail, Sticky, Container } from 'semantic-ui-react';

import './App.scss';

import DynamicHeader from './headers/DynamicHeader';

class App extends Component {
  state = {}

  handleContextRef = contextRef => {
    console.log(contextRef);
    this.setState({ contextRef });
  }
  
  render() {
    const { contextRef } = this.state
    return (
      <div className='app-container'>
        <DynamicHeader />
        <div className='cv-container'>
          <aside >
            <div>
                <Sticky context={contextRef} pushing offset={150}>
                    <Container text>
                      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
                    </Container>
                    <Container text>
                      <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
                    </Container>
                    <Container text>
                      <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
                    </Container>
                    <Container text>
                      <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
                    </Container>
                    <Container text>
                      <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
                    </Container>
                </Sticky>
</div>
          </aside>
          <section ref={this.handleContextRef}>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
            <Container text>
              <p>Na co dzień Senior Web Developer, ale mówi o sobie Inżynier Oprogramowania, bo liczy się dostarczanie wartości, nie ważne czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future Processing, po godzinach z pasją rozwijając swoje umiejętności w hobbystycznych projektach. Frontend to dla niego chleb powszedni, z Angularem idzie za pan brat od wersji 1.2 po dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.</p>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
