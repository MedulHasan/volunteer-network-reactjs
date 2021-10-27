import React from 'react';
import { HashLink } from 'react-router-hash-link'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Brand from '../../image/logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Navbar.Brand as={HashLink} to="/">
                        <img style={{ width: '150px' }} src={Brand} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link navigationLink" as={HashLink} to="/">Home</Nav.Link>
                            <Nav.Link className="nav-link navigationLink" as={HashLink} to="">My Event</Nav.Link>
                            <Nav.Link className="nav-link navigationLink register-link" as={HashLink} to="">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;