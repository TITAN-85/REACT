import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    // this.messageError = "";
  }

  render() {

    return (

      <nav>
        <div className="top-nav-bot">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/produit">Les produits</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}


