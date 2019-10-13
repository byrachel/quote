/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Login.css';


/* Post component */
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password: ''
    }
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="subtitle center">Devenez QuoteLover</h2>
                    <p className="separator center">___</p>
                    <p className="charte">Stockez facilement les citations que vous aimez, partagez-les en un clic sur vos réseaux sociaux ou publiez-les directement sur 'Quote'.</p>
                </div>
                <div className="col-md-6">  
                    <form className="login-form">
                        <h3 className="smalltitle">Créer un compte :</h3>
                        <input type="text" value={this.state.name} class="form-control mb-2" placeholder="Votre nom" required />
                        <input type="text" value={this.state.email} className="form-control mb-2" placeholder="Votre e-mail" required />
                        <input type="password" value={this.state.password} className="form-control mb-2" placeholder="Votre mot de passe" required />
                        <button className="btn btn-block btn-outline-secondary">Je m'inscris</button>
                    </form>
                    <p className="small-text center">J'ai déjà un compte. Me connecter.</p>
                </div>
            </div>
        </div>

    );
  }
}

export default Login;
