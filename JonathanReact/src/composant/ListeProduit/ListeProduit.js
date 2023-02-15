import React from 'react';
import { Link } from 'react-router-dom';
import Produit from '../Produit/Produit';
import './ListeProduit.css';

export default class ListeProduit extends React.Component{
  constructor(){
    super()

    this.state = {produits: [
      { id: 1,
        nom : "Produit 1",
        prix : 15.50
      },
      { id: 2,
        nom : "Produit 2",
        prix : 25.50
      },
      { id: 3,
        nom : "Produit 3",
        prix : 10.50
      },

    ], 
    messageErreur : "Test"}
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/webservice/php/biere")
      .then(data=>data.json())
      .then(data=>{
        this.setState({
          produits : data.data
        })
      })
  }

  render(){

    let aProduits = this.state.produits.map((unProduit)=>{

      return ( 
        <Link key={unProduit.id_biere} to={"/biere/" + unProduit.id_biere}>
            <Produit key={unProduit.id_biere} estConnecte={this.props.estConnecte}  biere={unProduit} {...unProduit} /> 
        </Link>
      );
    })
    
    if(aProduits.length <= 0){
      aProduits = <p>Aucun produit disponible</p>;
    }

    return (
      <div>
      {/* <div className="liste"> */}
        <h1 className='titre-centre'>Liste de biere</h1>
        {/* <p>Compteur : {this.props.compteur}</p> */}
        {/*}<p>{this.state.messageErreur}</p>{*/}
        <section className='mesProduits'>
          {aProduits}          
        </section>
      </div>
      
    );
  }
}


