import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

export default function Details({ estConnecte, courriel }) {

    const { id } = useParams();

    const api_url = "http://127.0.0.1:8000/webservice/php/";

    const [valeurCommentaireSend, setCommentairesSend] = useState({});
    const [valeurNoteSend, setNoteSend] = useState({});

    const [produit, setProduit] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState({});


    const commentWriterFirst = 'Ajouter commentaire';


    useEffect(() => {
        fetch(api_url + "/biere/" + id)
            .then(data => data.json())
            .then(data => {
                setProduit(data.data);
                console.log(data)
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/commentaire")
            .then(data => data.json())
            .then(data => {
                setCommentaires(data.data);
                console.log(data)
            })
    }, [])


    useEffect(() => {
        fetch(api_url + "/biere/" + id + "/note")
            .then(data => data.json())
            .then(data => {
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
    let noteActuel = '';

    // https://codingbeautydev.com/blog/react-get-form-input-value-on-submit/
    const noteValeur = (evn) => {
        // evn.preventDefault();
        noteActuel = evn.target.value;
        let note = {
            courriel: courriel,
            note: evn.target.value
        };
        console.log(evn.target.value);
        // https://javascript.plainenglish.io/react-get-input-value-on-change-16dcd6619caf
        setNoteSend(note)
    }


    const commentSubmit = (e) => {

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
                setNote(data.data);
                console.log(data);
            });
    }



    let aCommentaire = commentaires.map(unCommentaire => {
        // console.log(unCommentaire);
        return (
            <div className="commentaireBiere" key={unCommentaire.id_commmentaire}>

                {/* <div><IoCloseCircleSharp className="delete-icon" /></div> */}
                {/* <div><IoHammerSharp className="delete-icon" /></div> */}

                <div>{unCommentaire.courriel}</div>
                <div>{unCommentaire.commentaire}</div>

            </div>
        )
    });


    // let inputRate = '';

    // inputRate = <div>;

    {/* for (let i = 0; i < 9; i++) {
        inputRate += <input type="radio" value={i} name="valeurNoteSend" id="note-send" placeholder="Note"> </input>
    } */}

    {/* inputRate += </div>; */ }

    // console.log(inputRate);

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

                    {/* <label for="note-send" >{commentWriterFirst}</label>
                     <input
                        onChange={noteValeur}
                        name="valeurNoteSend"
                        id="note-send"
                        placeholder="Note"
                    > 
                    </input>*/}

                    {/* https://stackoverflow.com/questions/51915053/facing-issue-while-adding-radio-button-in-react-input-is-a-void-element-tag-an */}
                    <label for="note-send" >{commentWriterFirst}</label>

                    <div>
                        <input type="radio" value="1" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="2" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="3" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="4" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="5" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="6" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="7" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="8" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="9" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                        <input type="radio" value="10" name="valeurNoteSend" id="note-send" placeholder="Note" onChange={noteValeur} />
                    </div>

                    {/* <div>Votre note actuel es: {noteActuel}</div> */}
                    {/* <div>Votre note actuel es: {this.state.valeurNoteSend.note}</div> */}
                    <div>Vous avez entré la note: {valeurNoteSend.note}</div>


                    <button type="submit" value="submit">Envoye</button>
                </form>
            </div>;
    }


    return (

        <div className="detail-container">
            <section className="biere-container">
                {/* <h1>Details d'une bière</h1> */}
                <div className="info-bierre">
                    <h2>La bierre: {produit.nom}</h2>
                    <p>brasserie: {produit.brasserie}</p>
                    <p>Description: {produit.description}</p>
                    {/* <p>Id de biere: {produit.id_biere}</p> */}
                    <div className="noteMoyenne">
                        <p>Note moyenne: {Math.max(note.note)}</p>
                    </div>
                </div>
                <div>
                    {message}
                    {formComment}
                    {formNote}
                    {/* {inputRate} */}
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