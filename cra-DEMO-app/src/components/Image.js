import React from "react";

export default class Image extends React.Component {

    render() {
        return (
            <div>
                <p>Image Class</p>
                <img src={this.props.image} />
            </div>
        )
    }
}