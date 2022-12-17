import './ChatPrevisualizacion.css'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'




const ChatPrevisualizacion = ({nombre,mensaje,timestap,imgPerfil}) =>{


    return (

    <Link to = {`/chat/${nombre}`}>
        <div className="chatPrevisualizacion"> 
           <Avatar className="chatPrevisualizacion__img" alt = {nombre} src={imgPerfil}/>
           <div className='chatPrevisualizacion_detalles'>
         
       <div>
            <h2>{nombre}</h2>
            <p>{mensaje}</p>
            </div>
           
           </div>

           <p>{timestap}</p>
        </div>
    </Link>
    
   
    )
  
}
export default ChatPrevisualizacion