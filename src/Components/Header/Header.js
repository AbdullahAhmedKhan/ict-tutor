import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{width:"250px"}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu-bar">
                        
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About</Link>
                        
                        </Nav>
                        <Nav className='menu-bar'>
                            
                            <Link to="/login"><FontAwesomeIcon className='mx-2' icon={faRightToBracket}></FontAwesomeIcon>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;