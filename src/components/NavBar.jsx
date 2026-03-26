import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="body-tertiary" expand="lg" id="navigBar" data-bs-theme="dark">
            <Navbar.Brand><Nav.Link to="/" as={NavLink}>GAME PARTNER</Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/productos/componentes" as={NavLink}>Componentes</Nav.Link>
                    <Nav.Link to="/productos/perifericos" as={NavLink}>Perifericos</Nav.Link>
                    <Nav.Link to="/productos/escritorio" as={NavLink}>Escritorio</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl id="barraDeBusqueda" type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">🔎</Button>
                </Form>
                <Nav.Link to="/cart" as={NavLink}><CartWidget /></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
