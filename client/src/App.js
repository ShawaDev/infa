import './App.css';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom' 
import Registration from './component/Registration';
import Authpage from './component/Authpage';
import Regpage from './component/Regpage';
import Mainpage from './component/Mainpage';
import Aboutpage from './component/Aboutpage';
import Contactspage from './component/Contactspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<Regpage />}/>  
        <Route path='/sign-in' element={<Authpage />} />
        <Route path='/' element={<Mainpage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/contacts' element={<Contactspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
