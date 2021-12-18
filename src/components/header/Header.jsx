
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
import { logout } from '../../actions/userActions'

const Header = () => {
    // const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("userInfo"))
    
    const dispatch = useDispatch()

    const handleLogOut = ()=>{
        // localStorage.removeItem("userInfo")
        // navigate("/")
        dispatch(logout())
    }
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">TO DO List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/notes">My Notes</Nav.Link>
                
                <NavDropdown title={user && user.others.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Header
