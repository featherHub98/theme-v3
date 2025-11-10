import React from 'react'
import { Navbar, Container, Nav, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTheme } from "../togglePage/TogglePage"
export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/tableData">table of data</Nav.Link>
            <Nav.Link as={Link} to="/contactUs">Contact Us </Nav.Link>
          </Nav>
          <Nav className="ms-auto">

            <Button variant="danger" href="/" style={{ borderRadius: '10px' }} >LogOut</Button>
            {" "}
            <Button variant="secondary" style={{ borderRadius: '10px' }} onClick={toggleTheme}>{theme}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
