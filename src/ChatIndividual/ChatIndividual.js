import './ChatIndividual.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

const ChatIndividual = () =>{

  // Creamos una constante para controlar el input del mensaje que enviaremos, 
  // si el mensaje se envia se sumara a los demas mensajes.

    const admEnvio = e =>{
        e.preventDefault();
        setMensajes([...mensajes,{mensaje:input}]);
        setInput("");
    }

    const[input, setInput] = useState("");
    const[mensajes,setMensajes] = useState([
      {
       nombre: "Maria",
       imagen: "...",
       mensaje:"heyy"
      },
      {
       nombre: "Maria",
       imagen: "...",
       mensaje:"Estas ahi??"
      },

      {
       mensaje:"Perdon!!, no habia visto el mensaje"
      },
      


    ]);
    
  // Hacemos uso del Hook useNavigate mediante un boton para poder retroceder a la pagina anterior.
    const navigate = useNavigate();
    const back =()=>{
        navigate ("/chats");
    }


return(
    <>
        <IconButton onClick={back}>
            <ArrowBackIosIcon>

      </ArrowBackIosIcon>
      </IconButton>
    <div className='chatIndividual'>
       
    <p className='chatIndividual__timeStamp'>CONSEGUISTE UN MATCH EL 19/10/22</p>  
    {mensajes.map(mensaje=>(

      mensaje.nombre ? (
        <div className='chatIndividual__mensaje'>
            <Avatar className='chatIndividual__avatar' alt={mensaje.nombre} src={mensaje.imagen}/>

            <p className='chatIndividual__mensaje_texto'>{mensaje.mensaje}</p>
        </div>
      ):(
        <div className='chatIndividual__mensaje'>
              <p className='chatIndividual__mensaje_propio'>{mensaje.mensaje}</p>
        </div>

)
    ))}

<form className='chatIndividual__input'>
    <input className="chatIndividual__input_input"value = {input} onChange={e => setInput(e.target.value)} placeholder='Escribe un mensaje..'/>
    <button className="chatIndividual__input_send" onClick= {admEnvio}type="submit">Enviar</button>
        
    </form>
    </div>
</>
)
}

export default ChatIndividual