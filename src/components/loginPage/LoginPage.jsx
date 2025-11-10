import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoginContext from "../../hooks/LoginContext";
import axios from 'axios';
function LoginPage() {
  const LoginProvider = useContext(LoginContext)
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { isLogged, setIsLogged } = LoginProvider;
  const [userData,setUserData] = useState([]);
  const [error,setError] = useState()
  const navigate = useNavigate();
const fetchData = async()=>{
  try {
       const response = await axios.get("http://localhost:3001/users");
       
       setUserData(response.data)
       
    } catch (error) {
      setError(error)
    }
}
  
  useEffect(() => {
    fetchData()
    
  },[])



  const handleSubmit = (e) => {
    console.log('users ', userData );
    
    e.preventDefault();
    for (let i = 0 ; i<userData.length;i++){
      
      if ((email === userData[i].email) && (pass === userData[i].password)) {
      navigate("/tableData"); 
      setIsLogged(true);
        break;
    } else
      
    console.log(isLogged)
    }
    
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;