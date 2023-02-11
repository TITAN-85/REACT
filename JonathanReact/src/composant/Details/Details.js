import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

export default function Details({ estConnecte, courriel }) {
    // console.log(estConnecte, courriel)
    const { id } = useParams();
    //const params = useParams();
    //console.log(id, params)

    const [produit, setProduit] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState({});


    const commentWriterFirst = 'Ajouter commentaire';
    const commentWriterSecond = 'Lantement...';


    useEffect(() => {
        fetch("//127.0.0.1:8000/webservice/php/biere/" + id)
            .then(data => data.json())
            .then(data => {
                // console.log(data);
                setProduit(data.data);
                console.log(data)
            })
    }, [])


    useEffect(() => {
        fetch("//127.0.0.1:8000/webservice/php/biere/" + id + "/commentaire")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setCommentaires(data.data);
                console.log(data)
            }) 
    }, [])


    useEffect(() => {
        fetch("//127.0.0.1:8000/webservice/php/biere/" + id + "/note")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setNote(data.data);
                console.log(data)
            })
    }, [])


    let commentSubmit = () => {
        console.log('submit ok');
    }

    // let arrayDemo = ['array1', 'array2', 'array3']
    // let arrayDemo = [{'array1'}, {'array2'}, {'array3'}]

    let aCommentaire = commentaires.map(unCommentaire => {
        // console.log(unCommentaire);
        return (
            <div key={unCommentaire.id_commmentaire}> {unCommentaire.commentaire}</div>
        )
    });

    let messageCom = "";
    if (aCommentaire == 0) {
        messageCom = <p>Aucun Commentaire disponible</p>;
    }

    let message = "";
    if (estConnecte) {
        message = <p>Connecté avec : {courriel}</p>
    }

    return (
        <div>
            <section className="biere-container">
                {/* <h1>Details d'une bière</h1> */}
                <div className="info-bierre">
                    <h2>La bierre: {produit.nom}</h2>
                    <p>brasserie: {produit.brasserie}</p>
                    <p>Description: {produit.description}</p>
                    <p>Id de biere: {produit.id_biere}</p>
                    <p>Note: {note.note}</p>
                </div>
                <div className="form-container">
                    <form className="form-class" onSubmit={commentSubmit}>
                        <label for="commentaire-send" >{commentWriterFirst}</label>
                        <textarea name="commentaire-send" id="commentaire-send" type="text" ></textarea>
                        <button type="submit"  value="submit">Envoye</button>
                    </form>
                </div>
            </section>

            <section className="commentaire-container">
                <div className="commentaireBiere">
                    {/* https://react-icons.github.io/react-icons/icons?name=ai */}
                    <IoCloseCircleSharp className="delete-icon" />
                    <IoHammerSharp className="delete-icon" />
                    {aCommentaire}
                </div>
                {messageCom}
            </section>

            {message}
        </div>

    );

}