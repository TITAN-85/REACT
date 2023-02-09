import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from "./img/logo512.png"

export default class App extends React.Component {
    placeholder = 'placeholder for input';
    render() {
        return (
            <div className='name'>
                <Header title="Header string" />
                <h1>Hello World</h1>
                <input placeholder={this.placeholder} onClick={this.inputClick} onMouseEnter={this.mouseOver} >

                </input>
                <p>
                    Hello
                </p>
                <div>
                    <Image image={logo} />
                </div>
            </div>
        )
    }
    inputClick() { console.log('click') }
    mouseOver() { console.log('Mouse Over') }
}
