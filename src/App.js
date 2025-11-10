import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginPage from './components/loginPage/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TableData from "./components/dummyPage/DummyPage"
import NavBar from './components/navBar/NavBar';
import {TogglePage} from "./components/togglePage/TogglePage"
import LoginContext from './hooks/LoginContext';
import ContactUs from './components/dummyPage2/DummyPage2';
function App() {
  const [isLogged,setIsLogged] = useState(false)
  
  return (
  
    <BrowserRouter>
      <TogglePage >
    <div className='Theme'>
    <LoginContext.Provider value={{isLogged,setIsLogged}}>
       {isLogged && <NavBar/>}{console.log(isLogged)}
    <Container className='App-header'>
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/tableData' element={<TableData/>}></Route>
      <Route path='/contactUs' element={<ContactUs/>}></Route>
      </Routes>
    </Container>
    </LoginContext.Provider>
    </div>
    </TogglePage>
    </BrowserRouter>
    
   
    
  );
}

export default App;
