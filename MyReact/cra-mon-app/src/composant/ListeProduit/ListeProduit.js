import React from 'react';
import './ListeProduit.css';


export default class ListeProduit extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let entete = "ceci est une liste de produit"
    return (
      <div className="ListeProduit">
          <h1 className='ListeH1'>{entete}</h1>
          <p>Compteur: {this.props.compteur}</p>
      </div>
    );
  }
}
