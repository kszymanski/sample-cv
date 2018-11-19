import React, { Component } from 'react';
import { Rail, Sticky, Container } from 'semantic-ui-react';

import './App.scss';

import DynamicHeader from './headers/DynamicHeader';

class App extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })
  
  render() {
    const { contextRef } = this.state
    return (
      <div className='app-container' ref={this.handleContextRef}>
        <DynamicHeader />
        <div className='cv-container'>
          <aside >
            <Rail>
                <Sticky context={contextRef}>
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
                </Sticky>
              </Rail>
          </aside>
          <section>
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
