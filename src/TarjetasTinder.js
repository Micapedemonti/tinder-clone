import './TarjetasTinder.css'
import TinderCard from 'react-tinder-card'
import { useState, useEffect } from "react";
import {getDocs,collection} from "firebase/firestore"
import { firestoreDb } from './firebase';
import BotonesSwipe from './Botones/BotonesSwipe';

const TarjetasTinder = () =>{

const [persona, setPersona] = useState([]);

useEffect (()=>{
  getDocs(collection(firestoreDb, 'personas'))
  .then(response => {
    const persona = response.docs.map(doc =>{
        return {id: doc.id, ...doc.data()}
       
    })
    setPersona(persona)
    console.log(persona)
  })
},[])

 return (

    <>
    <div className="tarjetasTinder">
        <div className="tarjetasTinder__contenedor">
            {persona.map ( p => (
                <TinderCard 
                className="swipe" key = {p.id}
                preventSwipe = {['up', 'down']}>

                 <div className="tarjeta" 
                 style={{ backgroundImage: `url(${p.img})` }}>
                    <h2>{p.nombre}</h2>
                </div>   
                </TinderCard>
        
            ))}
             <BotonesSwipe/>
       
            </div>
        
    </div>
    
    </>
 )    
             }
export default TarjetasTinder