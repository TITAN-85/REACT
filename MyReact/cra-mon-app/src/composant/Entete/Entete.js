import React from 'react';
import './Entete.css';


export default class Entete extends React.Component {
  constructor(){
    super();

  }

  render(){
    let entete = "ceci est une entete"
    return (
      <div className="Entete">
          <h1 className='enteteH1'>{entete}</h1>
      </div>
    );
  }
}


