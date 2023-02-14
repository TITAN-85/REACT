
import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {

        return (
            <div className="footer-container">
                <div className="footer-header">
                    <div className="main-text">WTF, I'm Footer</div>
                </div>
            </div>
        )

    } 
}