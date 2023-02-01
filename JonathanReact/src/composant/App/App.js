import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();  // Appel explicite au constructeur de la classe React.Component
    this.message = "Ceci est un message";
    this.compteur = 0;
    this.state = { 
      compteur : 0
    };


    this.augmenteCompte = this.augmenteCompte.bind(this);
  }

  augmenteCompte(){
    //this.state.compteur++;
    this.setState({
      compteur : this.state.compteur+1
    })
    
    //this.compteur++;
    console.log(this.state.compteur);
   
  }

  render(){
    return (
      <section className='App'>
        <Entete />
        <button onClick={this.augmenteCompte}>Clique ({this.state.compteur})</button>
        <ListeProduit compteur={this.state.compteur} />

      </section>
    );
  }
}


