
import React from 'react';
import './Accueil.css';
import headerPhoto from './img/48241-2.jpg';
import { Link, NavLink } from 'react-router-dom';


export default class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pageAccueil accueil">
                {/* <div> */}
                    <img src={headerPhoto}>
                        {/* <div>
                            <NavLink to="/biere">Notre sélection de produit</NavLink>
                        </div> */}
                    </img>
                {/* </div> */}

                <div className="contenu">
                    <div className="bandeau">
                        <a href="/biere" className="btnAction">Notre sélection de produit</a>
                    </div>
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
            </div>
        );
    }
}