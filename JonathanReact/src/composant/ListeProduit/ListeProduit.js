import React from 'react';
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
        console.log(data);
        this.setState({
          produits : data.data
        })
      })

  }

  render(){

    let aProduits = this.state.produits.map((unProduit, index)=>{
      //console.log(unProduit, index)
      return ( 
        //<Produit nom={unProduit.nom} id={unProduit.id_biere} description={unProduit.description} />
        <Produit estConnecte={this.props.estConnecte}  biere={unProduit} {...unProduit} /> // Choisir sa façon, pas les deux...

      );
    })
    console.log(aProduits)
    
    if(aProduits.length <= 0){
      aProduits = <p>Aucun produit disponible</p>;
    }

    return (
      <div className="liste">
        <h1>liste</h1>
        <p>Compteur : {this.props.compteur}</p>
        {/*}<p>{this.state.messageErreur}</p>{*/}
        <section className='mesProduits'>
          {aProduits}
          {/*}{(aProduits.length ? aProduits : "Aucun produit disponible")}{*/}
          
        </section>
      </div>
      
    );
  }
}


