import React from 'react';
import './Produit.css';

export default class Produit extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        // console.log(this.props);
        let prix = ""
        if(this.props.estConnecte){
            prix =  <>
                        <p>Prix : {this.props.prix}</p>
                        <p>Prix : {this.props.biere.prix}</p>
                    </>;
        }
        // console.log(this.props);
        // console.log(this.props.biere.nom);
        return (
            
            <article className="produit">
                <p>{this.props.nom}</p>
                <p>Note moyenne: {this.props.note_moyenne}</p>
                {/* <p>Nombre note: {this.props.note_nombre}</p> */}
                <p>Date ajout: {this.props.date_ajout}</p>
                {/* <p>Nom : {this.props.biere.nom}</p> */}
                {/* <p>Nom : {this.props.biere.description}</p> */}
                {prix}
                
            </article>
        );
    }
}


