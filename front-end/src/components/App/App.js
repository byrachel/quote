/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';

/* Images imports */
import account_btn from './account.png';
import search_btn from './search.png';
import quote_btn from './quote.png';

/* Component import */
import Post from '../Post/Post';
import Form from '../Form/Form';
import Login from '../Login/Login';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      accountButtonClick: false,
      quoteButtonClick: false,
      searchButtonClick: false
    }
  }
  
  _displayLogin = () => {
    if(this.state.accountButtonClick === false) {
      this.setState((state) => ({ accountButtonClick: true }))
    }
    else {
      this.setState((state) => ({ accountButtonClick: false }))
    } 
  }

  _displayQuoteForm = () => {
    if(this.state.quoteButtonClick === false) {
      this.setState((state) => ({ quoteButtonClick: true }))
    }
    else {
      this.setState((state) => ({ quoteButtonClick: false }))
    } 
  }

  //componentDidMount() {

  // var options = {
  //   headers: {
  //     "X-Requested-With": "XMLHttpRequest"
  //   }
  // }

  // fetch("http://localhost:8080", options) 
  //   /* promesse / Une promesse renvoit toujours une promesse */
  //   .then(res => (res.json()))
  //   /* 2 réponses callback */
  //   .then(
  //   /* result est là pour nommer la promesse, c'est juste un nom */
  //     (result) => {
  //       console.log(result);
  //     },
  //     (error) => {
  //     }
  //   )
 //}

  render() {
    return (
      <div>

        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h1 className="title">' Qu<span className="o">o</span>te '</h1>
            </div>
            <div className="col-md-6 nav-btn">
              <button className="btn" onClick={this._displayLogin}>
                <img src={account_btn} alt="my account" />
              </button>
              <button className="btn" onClick={this._displayQuoteForm}>
                <img src={quote_btn} alt="quote" />
              </button>
              <button className="btn" onClick={this._displaySearch}>
                <img src={search_btn} alt="search" />
              </button>
            </div>

          </div>
        </div>

          <div className="container-fluid">

              <h3 className="smalltitle center">Pour tous les fans de citations</h3>

              {(this.state.accountButtonClick === true) &&
              <Login />
              }

              {(this.state.quoteButtonClick === true) &&
              <Form />
              }

          </div>

        <div className="container">
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

      </div>
    );
  }
}

export default App;
