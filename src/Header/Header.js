import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { Link} from 'react-router-dom';
import './Header.css'
import TarjetasTinder from '../TarjetasTinder';

const Header = () => {


  return (
    <>
    <div className='header'>
    
<IconButton> 
<PersonIcon className='header__icon'fontSize ="large"/>
</IconButton>       

<Link to = "/">
<img src='../logo-tinder.png' className='logo__tinder'/>
</Link>

<Link to = "./chats">
<IconButton>
<ForumIcon className='header__icon'fontSize ="large"/>
</IconButton>
</Link>
    </div>
    <TarjetasTinder/>
    </>
  )
}

export default Header