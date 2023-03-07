
import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            helpText: "helpText",
            userData: ""
        }
    }

    render() {

        return (
            <div className="footer-container">
                <div className="footer-header">
                    <div className="main-text">Contactez-nous</div>
                </div>
            </div>
        )
    } 
}
