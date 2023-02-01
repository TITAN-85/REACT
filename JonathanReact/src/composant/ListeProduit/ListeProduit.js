import React from 'react';
import './ListeProduit.css';

export default class ListeProduit extends React.Component{
  constructor(){
    super()
    
  }
  render(){
    return (
      <div className="liste">
        <h1>liste</h1>
        <p>Compteur : {this.props.compteur}</p>
      </div>
    );
  }
}


