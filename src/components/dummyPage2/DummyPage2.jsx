import React, { useState } from 'react'
import { Container,Form,Button,Modal} from 'react-bootstrap'
export default function DummyPage2() {
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e)=>{
    e.preventDefault();
    
   

  }
  return (
   <Container>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Number" placeholder="Phone Number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Message</Form.Label>
        <Form.Control size='lg' type="text" as="textarea" placeholder="message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleShow}>
        Submit
      </Button>
    </Form>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for contacting us!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <h3>{message}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

   </Container>
  )
}
