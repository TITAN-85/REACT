import './Details.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Details() {

    // Hook
    // useParams
    // useEffect
    // 


    const {id} = useParams();
    const params = useParams();
    console.log(id, params);
    // const [produit, setProduit] = useState({data: {}})
    const [produit, setProduit] = useState({})
    const [commentaire, setCommentaire] = useState({data: {}})
    const [note, setNote] = useState({data: {}})

    useEffect(()=>{
        fetch("//127.0.0.1:8000/webservice/php/biere/"+id)
            .then(data=>data.json())
            .then(data=>{
                    console.log(data);
                    setProduit(data.data);
            })
    }, [])

    return (
        <section>
            <h1>Details d'une biere</h1>
            <p>{produit.nom}</p>
            <p>{produit.description}</p>
            <p>{produit.note}</p>
        </section>
    )

}