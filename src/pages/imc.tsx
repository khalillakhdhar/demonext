/* eslint-disable react-hooks/rules-of-hooks */
import { parse } from 'path';
import React, { useState } from 'react'

export default function imc() {
    // poids en kg
    // taille en m
    // resultat = poids / taille * taille
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [resultat, setResultat] = useState(0);
    const [message, setMessage] = useState("");
    // imc function
    const imc = () => {
        const p=parseFloat(poids.toString());
        const t=parseFloat(taille.toString());
        const r=p/(t*t);
        // Math.round(p/t*t);
        setResultat(r);
        if (r<18.5) {
            setMessage("insuffisance pondérale");
        } else if (r>=18.5 && r<=24.9) {
            setMessage("poids normal");
        } else if (r>=25 && r<=29.9) {
            setMessage("surpoids");
        } else if (r>=30 && r<=34.9) {
            setMessage("obésité modérée");
        } else if (r>=35 && r<=39.9) {
            setMessage("obésité sévère");
        } else if (r>=40) {
            setMessage("obésité morbide");
        }
    }
  return (
    <div>
        <h2>Calcul de IMC</h2>
        <label htmlFor="poids">Poids en kg</label>
        <input type="text" id="poids" name="poids" onChange={(e)=>setPoids(e.target.value)} />
        <label htmlFor="taille">Taille en m</label>
        <input type="text" id="taille" name="taille" onChange={(e)=>setTaille(e.target.value)} />
        <button onClick={imc}>Calculer</button>
        <p>IMC : {resultat.toFixed(2)}</p>
        <p>Message : {message}</p>
      
    </div>
  )
}
