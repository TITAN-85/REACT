import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Entete.css';
import logoPhoto from './img/LOGO-FINAL-svg.png';


export default class Entete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courrielValide: false,
      courriel: ""
    }
    this.setCourriel = this.setCourriel.bind(this);
    this.seConnecter = this.seConnecter.bind(this);

    this.messageError = "";
  }

  setCourriel(evt) {
    let courriel = evt.target.value;
    let valide;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (courriel !== "" && courriel.match(regex)) { // Valide un courriel non vide... à refaire genre avec un regexp... tsé...
      valide = true;
    } else {
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
              <Link className="logo" to="/"> <img  src={logoPhoto} /></Link>
              <span className="flex-spacer"></span>
              <p className="menu-mobile"></p>
            </div>

            <span className="flex-spacer"></span>

            <ul>
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/biere">Les produits</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>

            <div className='login-container'>
              <div className='login'> 
                <p>Courriel : <input disabled={this.props.estConnecte} type="email" onChange={this.setCourriel} ></input></p>
              </div>
              <div className='login'>
                <button disabled={!this.state.courrielValide} onClick={this.seConnecter}>{btnConnecter}</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}


