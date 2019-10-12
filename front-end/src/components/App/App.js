/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';
import nav from './nav.png';

/* Component import */
import Post from '../Post/Post';
import Form from '../Form/Form';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {

  var options = {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  }

  fetch("http://localhost:8080", options) 
    /* promesse / Une promesse renvoit toujours une promesse */
    .then(res => (res.json()))
    /* 2 réponses callback */
    .then(
    /* result est là pour nommer la promesse, c'est juste un nom */
      (result) => {
        console.log(result);
      },
      (error) => {
      }
    )
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">' Qu<span className="o">o</span>te '</h1>
            </div>
            <div className="col-md-6">
              <img src={nav} className="nav" />
            </div>
          </div>
          <Form />
          <div className="row">
            <div className="col-md-4 quoteList">
              <Post postContent="L'imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux." author="Marilyn Monroe"/>
            </div>
            <div className="col-md-4 quoteList">
              <Post postContent="Soyez insatiables, soyez fous. C’est vrai que ça n’est pas dans le statu quo qu’on se préparera un avenir meilleur. Ni la frilosité et les certitudes qui nous permettront d’avancer." author="Steve Jobs"/>
          </div>
          <div className="col-md-4 quoteList">
              <Post postContent="Quoi que tu rêves d'entreprendre, commence-le. L'audace a du génie, du pouvoir, de la magie." author="Goethe"/>
          </div>
      </div>
      </div>

    );
  }
}

export default App;
