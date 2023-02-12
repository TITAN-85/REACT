import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Entete.css';
import Navigation from '../Navigation/Navigation';

export default class Entete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courrielValide: false,
      courriel: ""
    }
    //this.connection = this.connection.bind(this)
    this.setCourriel = this.setCourriel.bind(this);
    this.seConnecter = this.seConnecter.bind(this);

    this.messageError = "";
  }

  setCourriel(evt) {
    console.log(evt.target.value)
    let courriel = evt.target.value;
    let valide;

    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (courriel !== "" && courriel.match(regex)) { // Valide un courriel non vide... à refaire genre avec un regexp... tsé...
      valide = true;
    } else {
      // this.messageError = 'the email is invalid. Please try again';
      valide = false;
    }

    this.setState({
      courrielValide: valide,
      courriel: courriel
    })

  }

  seConnecter() {

    this.props.seConnecter(this.state.courriel)
  }
  render() {
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter" : "Se connecter")
    return (
      <header className="App-header">
        <nav>
          <div className="top-nav">
            <div className="barre">
              <Link className="logo" to="/">B<span>iero</span></Link>
              <span className="flex-spacer"></span>
              <p className="menu-mobile"></p>
            </div>
            {/* <span className="flex-spacer"></span> */}
            <ul>
              <li>
                <NavLink to="/produit">Les produits</NavLink>
              </li>
            </ul>
            <ul className='login-container'>
              <li>
                <p>Courriel : <input disabled={this.props.estConnecte} type="email" onChange={this.setCourriel}></input></p>
              </li>
              <li>
                <button disabled={!this.state.courrielValide} onClick={this.seConnecter}>{btnConnecter}</button>
              </li>
              {/* {this.messageError} */}
            </ul>
          </div>
        </nav>
        <Navigation/>
      </header>
    );
  }
}


