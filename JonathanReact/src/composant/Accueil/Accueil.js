
import React from 'react';
import './Accueil.css';
import headerPhoto from './img/48241-2.jpg';
import bierePhoto from './img/brisquola-300x300.png';
import bierePhoto2 from './img/Chooch-can-300x300.png';
import bierePhoto3 from './img/Lubriaque-can-alone-120x300.png';
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


                <div className="contenu">
                    <div className="arguments">
                        <div>Argument 1 : (à compléter)
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                        </div>
                        <div>Argument 2 : (à compléter)
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                        </div>
                        <div>Argument 3 : (à compléter)
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}