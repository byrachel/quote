/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Form.css';


/* Post component */
class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        quote: '',
        author: '',
      
    }
  }

  render() {
    return (

            <form className="quote-form">
                <input type="text" value={this.state.quote} className="input-quote" placeholder="Proposez une citation" required />
                <input type="text" value={this.state.author} className="input-author" placeholder="Auteur" required />
                <button>Envoyer</button>
            </form>

    );
  }
}

export default Form;
