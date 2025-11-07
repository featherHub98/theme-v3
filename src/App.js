import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginPage from './components/loginPage/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router';
import DummyPage from "./components/dummyPage/DummyPage"
import NavBar from './components/navBar/NavBar';
import {TogglePage} from "./components/togglePage/TogglePage"
import LoginContext from './hooks/LoginContext';
function App() {
  const [isLogged,setIsLogged] = useState(false)
  
  return (
    <div className='Theme'>
    <TogglePage >
      <LoginContext.Provider value={{isLogged,setIsLogged}}>
    <BrowserRouter>
      
       {isLogged && <NavBar/>}
    <Container className='App-header'>
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/dummyPage' element={<DummyPage/>}></Route></Routes>
    </Container>
    </BrowserRouter>
    </LoginContext.Provider>
    </TogglePage>
    </div>
  );
}

export default App;
