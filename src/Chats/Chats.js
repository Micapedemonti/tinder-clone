import { useNavigate } from "react-router-dom"
import ChatPrevisualizacion from "../ChatPrevisualizacion/ChatPrevisualizacion"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";


const Chats = () => {

    const navigate = useNavigate();
    const back =()=>{
        navigate ("/");
    }




    return(
        <div>
<div>
     <IconButton onClick={back}>
         <ArrowBackIosIcon/>
     </IconButton>
         <ChatPrevisualizacion
            nombre="Maria"
            mensaje="Hola, que tal!?"
            timestap="hace 45seg"
            imgPerfil ="https://images.pexels.com/photos/4118015/pexels-photo-4118015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           />
           <ChatPrevisualizacion
            nombre="Agostine"
            mensaje="de donde eres?"
            timestap="Hace 1h"
            imgPerfil ="https://images.pexels.com/photos/7275564/pexels-photo-7275564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           />
           <ChatPrevisualizacion
            nombre="Estephanie"
            mensaje="yo tambien programo!!"
            timestap="Hace 40seg"
            imgPerfil ="https://images.pexels.com/photos/4118806/pexels-photo-4118806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           />
           <ChatPrevisualizacion
            nombre="Rita"
            mensaje="que haces?"
            timestap="Hace 1 semana"
            imgPerfil ="https://images.pexels.com/photos/7591369/pexels-photo-7591369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           />
           </div>

        </div>

    )
}

export default Chats