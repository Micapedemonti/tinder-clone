import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BotonesSwipe from '../src/Botones/BotonesSwipe';
import ChatIndividual from '../src/ChatIndividual/ChatIndividual'
import Chats from '../src/Chats/Chats';

const App =()=> {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
  <Route path = "/" element = {<Header botonRetroceder="/chats"/>} key="header"/> 
      <Route path = "/" element = {<BotonesSwipe/>}key="swipe"/>
      <Route path = "/chats" element = {<Chats/>}key="chats"/>
      <Route path = "/chat/:persona" element = {<ChatIndividual/>}key="individual" />
    </Routes>      
      
  </BrowserRouter>
    </div>
  );
}

export default App;
