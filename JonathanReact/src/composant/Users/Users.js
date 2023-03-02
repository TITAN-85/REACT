
import React from "react";

export default class Users extends React.Component {

    constructor(){
        super()

        this.state = {
            users: [
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

            messageErreur : "Test"

        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/webservice/php/biere")
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    users : data.data
                })
                console.log(this.state)
            })
    }

    render() {

        // let aUsers = this.state.users.map((oneUsers)=>{
        //     return (
        //         <div>{oneUsers}</div>
        //     )
        //         console.log(aUsers)
        // })

        return (
                <div>
                    <h2>Users</h2>
                </div>
        )
    }
}
