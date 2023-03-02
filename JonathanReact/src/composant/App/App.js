import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Accueil from '../Accueil/Accueil';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Users from "../Users/Users";

export default class App extends React.Component {
  constructor() {
    super();  // Appel explicite au constructeur de la classe React.Component
    this.message = "Ceci est un message";
    this.compteur = 0;
    this.state = {
      compteur: 0,
      estConnecte: false,
      courriel: ""
    };

    // this.augmenteCompte = this.augmenteCompte.bind(this);
    this.connection = this.connection.bind(this);
  }

  connection(courriel) {
    this.setState({
      estConnecte: !this.state.estConnecte,
      courriel: courriel
    });
  }

  // augmenteCompte(){
  //   this.setState({
  //     compteur : this.state.compteur+1
  //   })
  // }

  render() {
    return (

      <Router id="App">
        <Entete seConnecter={this.connection} estConnecte={this.state.estConnecte} />
        <Routes>
          <Route path="/" element={<Accueil estConnecte={this.state.estConnecte} courriel={this.state.courriel} />} />
          <Route path="/biere" element={<ListeProduit estConnecte={this.state.estConnecte} courriel={this.state.courriel} />} />
          <Route path="/biere/:id" element={<Details estConnecte={this.state.estConnecte} courriel={this.state.courriel} />} />
          <Route path="/users" element={<Users estConnecte={this.state.estConnecte} courriel={this.state.courriel} />} />
        </Routes>
        <Footer/>
      </Router>

    );
  }
}


