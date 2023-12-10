/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react'

export default function choix() {
  const router = useRouter();

  const routage = router.query;
 // let x = id.id;

  
return (
  <div>
    {/* Afficher le contenu de la variable */}
   
    <p>ID  : {routage.id}</p>
  </div>
)
}
