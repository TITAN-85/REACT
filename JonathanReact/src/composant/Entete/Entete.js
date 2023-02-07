import React from 'react';
import './Entete.css';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


export default class Entete extends React.Component{
  constructor(props){
    super(props);
    //this.state = {estConnecte : false}
    //this.connection = this.connection.bind(this)
  }

 /* connection() {
    this.setState({
      estConnecte : !this.state.estConnecte
    });
  }*/

  render(){
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter": "Se connecter")
    return (
      <header className="App-header">
        <nav>
            <div className="top-nav">
              <div className="barre">
                <NavLink className="logo" to="/">
                  B<span>iero</span>
                </NavLink>
                <span className="flex-spacer"></span>
                <p className="menu-mobile"></p>
              </div>
              <span className="flex-spacer"></span>
                          <ul>
                            <li>
                              <NavLink to="/produit">Les produits</NavLink>
                            </li>
                          </ul>
                          <section>
                            <button onClick={this.props.seConnecter}>{btnConnecter}</button>
                          </section>
            </div>
          </nav>
        </header>
    );
  }
}


