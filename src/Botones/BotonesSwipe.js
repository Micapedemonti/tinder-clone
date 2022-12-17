import './BotonesSwipe.css'
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


const BotonesSwipe = () =>{
return(
    <div className='botonesSwipe'>

        <IconButton className='botonesSwipe__replay'>
        <ReplayIcon fontSize='large' sx=" color: #fdcc63 "/>
        </IconButton>
        <IconButton className='botonesSwipe__close'>
        <CloseIcon fontSize='large' sx=" color:#fb6f6b" />
        </IconButton>
        <IconButton className='botonesSwipe__star'>
        <StarIcon fontSize='large' sx=" color: #2cb5c7"/>
        </IconButton>
        <IconButton className='botonesSwipe__fav'>
        <FavoriteIcon fontSize='large' sx=" color:#4fcc94"/>
        </IconButton>
        <IconButton className='botonesSwipe__flash'>
        <FlashOnIcon fontSize='large' sx=" color:#895da5"/>
        </IconButton>
        

    </div>
)
}

export default BotonesSwipe