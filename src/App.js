import React, { Component } from 'react';
import { Image, Container } from 'semantic-ui-react';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import './App.scss';

class App extends Component {
  state = {
    image: {
      left: '60%',
      top: '10%'
    },
    header: {
      height: '300px'
    },
    name : {
      top: '35%', // 30 - 35
      left: '40%', // -28 - 40
      fontSize: '3.5rem'
    }
  }
  
  scroll$;
  
  componentDidMount(){
    this.scroll$ = fromEvent(window, 'scroll')
      .pipe(
        map(x => window.scrollY),
        filter(x => x <= 500),
        map(x => x > 200 ? 200 : x)
      )
      .subscribe(x => {
        this.setState({
          ...this.state,
          image :{
            left: `${60 - (x * 0.29)}%`,
            top: `${10 - (x * 0.04)}%`
          },
          header: {
            height: `${300 - x}px`
          },
          name : {
            top: `${38 - (x * 0.025)}%`, // 30 - 35
            left: `${40 - (x * 0.34)}%`, // -28 - 40
            fontSize: `${3.5 - (x * 0.0075)}rem`,
            color: x < 200 ? 'black' : 'white'
          }
        })
      });
  }

  componentWillUnmount(){
    this.scroll$.unsubscribe();
  }

  render() {
    const { image, header, name } = this.state;
    return (
      <div className='app-container'>
        <header >
          <div className='cv-container header' style={header}>
            <aside>
              <Image src={`${process.env.PUBLIC_URL}/images/kamilek.jpg`} circular style={image}></Image>
            </aside>
            <section>
              <h1 style={name}>Kamil Szymański</h1>
            </section>
          </div>
        </header>
        <div className='cv-container'>
          <aside></aside>
          <section>
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
