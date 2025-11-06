import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import { useNavigate } from 'react-router';
function LoginPage() {
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');
  const navigate = useNavigate();
  const user = {
    email : 'hey@gmail.com',
    pass :'123'
  }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        (email === user.email)&&(pass === user.pass)?navigate("/dummyPage"):console.log("test1")
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={pass} onChange={(e)=>{setPass(e.target.value)}} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;