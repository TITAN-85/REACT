import React from 'react';
import './Entete.css';

export default class Entete extends React.Component{
 
  render(){
    return (
      <header className="entete">
        <h1>Biero!</h1>
        <nav>
          <ul>
            <li>Nav 1</li>
            <li>Nav 2</li>
            <li>Nav 3</li>
          </ul>
        </nav>
      </header>
    );
  }
}


