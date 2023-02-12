import React from 'react';
import './Produit.css';
import biereImg from './img/brisquola-300x300.png';
import biereImg2 from './img/can-300x300.png';
import biereImg3 from './img/Chooch-can-300x300.png';

export default class Produit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageBiere: [
                {
                    nom: biereImg
                },
                {
                    nom: biereImg2
                },
                {
                    nom: biereImg3
                },
            ]
        }


    }
    render() {
        // console.log(this.props);
        // let prix = ""
        // if(this.props.estConnecte){
        //     prix =  <>
        //                 <p>Prix : {this.props.prix}</p>
        //                 <p>Prix : {this.props.biere.prix}</p>
        //             </>;
        // }
        // console.log(this.props);
        // console.log(this.props.biere.nom);
        console.log(this.state.imageBiere);

        // let allImg = this.state.imageBiere.map((unImage) => {

        //     return (
        //         <div>
        //             <img src={unImage.nom}></img>
        //         </div>
        //     )
        // });
        // console.log(allImg);

        return (

            <article className="produit-container">
                <div className='produit'>
                    {/* {allImg} */}
                    <div><img className='img-biere' src={biereImg}></img></div>
                    <div className='produit-text'>
                        <h5>{this.props.nom}</h5>
                        <p>Brasserie: {this.props.brasserie}</p>
                        <p>Biere Nr. {this.props.id_biere}</p>
                        {/* <p className='descr'>Biere Nr. {this.props.description}</p> */}
                    </div>
                </div>

            </article>
        );
    }
}


