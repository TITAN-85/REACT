
import React from 'react';
import './Accueil.css';
import headerPhoto from './img/mainFoto02.jpg';
import bierePhoto from './img/brisquola-300x300.png';
import bierePhoto2 from './img/Chooch-can-300x300.png';
import bierePhoto3 from './img/spina-can-1-300x300.png';
import { Link, NavLink } from 'react-router-dom';
import Produit from '../Produit/Produit';


export default class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pageAccueil ">
                <div className="photo-banner">
                    <img src={headerPhoto} />
                    <div className='photo-banner-text'>
                        <NavLink className="photo-banner-title" to="/biere">Biere de Montreal</NavLink>
                        <NavLink className="photo-banner-title" to="/biere">Notre sélection de produit</NavLink>
                    </div>
                </div>
                <div>
                    <h1 className='decouvrir-titre'>À découvrir</h1>
                </div>
                <div className='decouvrir-container'>
                    <section className='decouvrir-cartes'>
                        <h2>Espace Québec</h2>
                        <div>
                            <h3></h3>
                            <img src={bierePhoto} />
                            <p>Maintenant plus que jamais, découvrez les producteurs artisans locaux passionnés qui exploitent avec fierté les richesses du terroir de la Belle Province.</p>
                        </div>
                    </section>
                    <section className='decouvrir-cartes'>
                        <h2>Besoin d'inspiration?</h2>
                        <div>
                            <h3></h3>
                            <img src={bierePhoto2} />
                            <p>Maintenant plus que jamais, découvrez les producteurs artisans locaux passionnés qui exploitent avec fierté les richesses du terroir de la Belle Province.</p>
                        </div>
                    </section>
                    <section className='decouvrir-cartes'>
                        <h2>Espace cocktail</h2>
                        <div>
                            <h3></h3>
                            <img src={bierePhoto3} />
                            <p>Maintenant plus que jamais, découvrez les producteurs artisans locaux passionnés qui exploitent avec fierté les richesses du terroir de la Belle Province.</p>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}