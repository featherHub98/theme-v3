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
  const [data,setData] = useState();
  const [error,setError] = useState()
  const navigate = useNavigate();

  
  useEffect(()=>{const getData = async (params) => {
    
    try {
       const response = await axios.get("/user.json");
       setData(response.data)
       
    } catch (error) {
      setError(error)
    }
  }
  getData();},[])



  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0 ; i<data.users.length;i++){
      console.log(data.users[i].email)
      if ((email === data.users[i].email) && (pass === data.users[i].password)) {
      navigate("/tableData"); 
      setIsLogged(true);
        break;
    } else
      console.log("failed to connect")
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