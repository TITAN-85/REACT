import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

export default function Details({ estConnecte, courriel }) {
    // console.log(estConnecte, courriel)
    const { id } = useParams();
    //const params = useParams();
    //console.log(id, params)
    const api_url = "http://127.0.0.1:8000/webservice/php/";

    const [valeurCommentaireSend, setCommentairesSend] = useState({});
    const [valeurNoteSend, setNoteSend] = useState({});

    const [produit, setProduit] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState({});


    const commentWriterFirst = 'Ajouter commentaire';
    const commentWriterSecond = 'Lantement...';


    useEffect(() => {
        fetch(api_url + "/biere/" + id)
            .then(data => data.json())
            .then(data => {
                // console.log(data);
                setProduit(data.data);
                console.log(data)
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/commentaire")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setCommentaires(data.data);
                console.log(data)
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/note")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setNote(data.data);
                console.log(data)
            })
    }, [])

    // https://codingbeautydev.com/blog/react-get-form-input-value-on-submit/
    const commentaireValeur = (evn) => {
        // evn.preventDefault();
        let commentaire = {
            courriel: courriel,
            commentaire: evn.target.value
        };
        console.log(evn.target.value);
        // https://javascript.plainenglish.io/react-get-input-value-on-change-16dcd6619caf
        setCommentairesSend(commentaire)
    }
    // https://codingbeautydev.com/blog/react-get-form-input-value-on-submit/
    const noteValeur = (evn) => {
        // evn.preventDefault();
        let note = {
            courriel: courriel,
            note: evn.target.value
        };
        console.log(evn.target.value);
        // https://javascript.plainenglish.io/react-get-input-value-on-change-16dcd6619caf
        setNoteSend(note)
    }


    const commentSubmit = () => {

        var entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        fetch(api_url + "biere" + "/" + id + "/commentaire", {
            method: "PUT",
            body: JSON.stringify(valeurCommentaireSend),
            headers: entete
        })
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data);
                setCommentaires(data.data);
                console.log(data);
            });
    }


    const noteSubmit = () => {

        var entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        fetch(api_url + "biere" + "/" + id + "/note", {
            method: "PUT",
            body: JSON.stringify(valeurNoteSend),
            headers: entete
        })
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data);
                setNote(data.data);
                console.log(data);
            });
    }

    // const biereDelete = () => {

    //     var entete = new Headers();
    //     entete.append("Content-Type", "application/json");
    //     entete.append("Authorization", "Basic " + btoa("biero:biero"));

    //     fetch(api_url + "biere" + "/" + id + "/commentaire", {
    //         method: "delete",
    //         body: JSON.stringify({
    //             id: id,
    //             courriel : courriel
    //         }),
    //         headers: entete
    //     })
    //         .then(reponse => reponse.json())
    //         .then(data => {
    //             console.log(data);
    //             console.log(data);
    //         });
    // }


    // let arrayDemo = ['array1', 'array2', 'array3']
    // let arrayDemo = [{'array1'}, {'array2'}, {'array3'}]

    let aCommentaire = commentaires.map(unCommentaire => {
        // console.log(unCommentaire);
        return (
            <div className="commentaireBiere" key={unCommentaire.id_commmentaire}>
                <div>
                    <IoCloseCircleSharp className="delete-icon" />
                </div>
                <div>
                    <IoHammerSharp className="delete-icon" />
                </div>

                <div >
                    {unCommentaire.courriel}
                </div>
                <div >
                    {unCommentaire.commentaire}
                </div>
            </div>
        )
    });



    let messageCom = "";
    if (aCommentaire == 0) {
        messageCom = <p>Aucun Commentaire disponible</p>;
    }

    let message = "";
    let formComment = '';
    let formNote = '';

    if (estConnecte) {
        message = <p>Connecté avec : {courriel}</p>

        formComment =
            <div className="form-container">
                <form className="form-class" onSubmit={commentSubmit}>
                    <label for="commentaire-send" >{commentWriterFirst}</label>
                    <textarea
                        onChange={commentaireValeur}
                        name="valeurCommentaireSend"
                        id="commentaire-send"
                        placeholder="Commentaire"
                    >
                    </textarea>
                    <button type="submit" value="submit">Envoye</button>
                </form>
            </div>;

        formNote =
            <div className="form-container">
                <form className="form-class" onSubmit={noteSubmit}>
                    <label for="commentaire-send" >{commentWriterFirst}</label>

                    <input
                        onChange={noteValeur}
                        name="valeurNoteSend"
                        id="commentaire-send"
                        placeholder="Note"
                    >
                    </input>

                    <button type="submit" value="submit">Envoye</button>
                </form>
            </div>;
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

                {formComment}
                {formNote}

            </section>

            <section className="commentaire-container">
                <div >
                    {/* https://react-icons.github.io/react-icons/icons?name=ai */}
                    {/* <IoCloseCircleSharp className="delete-icon" />
                    <IoHammerSharp className="delete-icon" /> */}
                    {aCommentaire}
                </div>
                {messageCom}
            </section>

            {message}
        </div>

    );

}