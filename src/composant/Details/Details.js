import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
// import { interval } from 'rxjs';

export default function Details({ estConnecte, courriel }) {

    const { id } = useParams();

    const api_url = "http://127.0.0.1:8000/webservice/php/";
    // const api_url = "https://beer.alexandrucandu.ca/webservice/php/";

    const [valeurCommentaireSend, setCommentairesSend] = useState({});
    const [valeurNoteSend, setNoteSend] = useState({});


    const [produit, setProduit] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState({});

    const commentWriterFirst = 'Ajouter une commentaire';
    const noteWriterFirst = 'Ajouter une note';

    useEffect(() => {
        fetch(api_url + "/biere/" + id)
            .then(data => data.json())
            .then(data => {
                setProduit(data.data);
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/commentaire")
            .then(data => data.json())
            .then(data => {
                setCommentaires(data.data);
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/note")
            .then(data => data.json())
            .then(data => {
                setNote(data.data);
            })
    }, [])


    const commentaireValeur = (evn) => {
        let commentaire = {
            courriel: courriel,
            commentaire: evn.target.value
        };
        setCommentairesSend(commentaire)
    }

    
    let noteActuel = '';
    const noteValeur = (evn) => {
        noteActuel = evn.target.value;
        let note = {
            courriel: courriel,
            note: evn.target.value
        };
        setNoteSend(note)
    }

    const commentSubmit = (e) => {
        e.preventDefault();
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
                // console.log(data);
                fetch(api_url + "/biere/" + id + "/commentaire")
                    .then(data => data.json())
                    .then(data => {
                        setCommentaires(data.data);
                        // console.log(data.data)
                    })
            });
    }


    const noteSubmit = (e) => {
        e.preventDefault();

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
                fetch(api_url + "/biere/" + id + "/note")
                    .then(data => data.json())
                    .then(data => {
                        setNote(data.data);
                    })
            });

    }


    let aCommentaire = commentaires.map(unCommentaire => {
        return (
            <div className="commentaireBiere" key={unCommentaire.id_commmentaire}>

                <div>{unCommentaire.courriel}</div>
                <div>{unCommentaire.commentaire}</div>

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

                    <label for="note-send" >{noteWriterFirst}</label>
                    <div>
                        <input className="radio" type="radio" value="1" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="2" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="3" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="4" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="5" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="6" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="7" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="8" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="9" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input className="radio" type="radio" value="10" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                    </div>
                    <div>Vous avez entré la note: {valeurNoteSend.note}</div>
                    <button type="submit" value="submit">Envoye</button>
                </form>
            </div>;
    }


    return (

        <div className="detail-container">
            <section className="biere-container">
                <div className="info-bierre">
                    <h2>La bierre: {produit.nom}</h2>
                    <p>brasserie: {produit.brasserie}</p>
                    <p>Description: {produit.description}</p>
                    <div className="noteMoyenne">
                        <p>Note moyenne: {Math.max(note.note)}</p>
                    </div>
                </div>
                <div>
                    {message}
                    {formComment}
                    {formNote}
                </div>
            </section>

            <section className="commentaire-container">
                <div >
                    {aCommentaire}
                    {messageCom}
                </div>
            </section>

        </div>

    );

}