import React from 'react';
import Entete from "..//Entete/Entete";
import ListeProduit from "..//ListeProduit/ListeProduit";
import './App.css';


export default class App extends React.Component {

  compteur;

  constructor(){
    super();
    this.compteur = 0;
    this.augmenteCompte = this.augmenteCompte.bind(this)

    this.state = {
      compteur : 0
    }
  }

  salutation(){
    return "Salut Toi"
  }

  augmenteCompte(){
    // this.state.compteur++
    this.setState({
      // compteur : this.state.compteur++
      // compteur : this.state.compteur+1
      compteur : ++this.state.compteur
    })

    // this.compteur++
    console.log(this.state.compteur);
  }

  render(){
    let toto = "Allo toto";
    return (
      <section className="App">
        <h1>{toto}</h1>
        {this.salutation()}
            <button onClick={this.augmenteCompte}>Click ({this.state.compteur})</button>

            <Entete/>
            <ListeProduit compteur={this.state.compteur} />


          </section>
    );
  }
}


