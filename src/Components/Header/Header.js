import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar className="p-3" sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><img style={{ width: "250px" }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu-bar">

                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About</Link>

                        </Nav>
                        {
                            user ?
                                <button className='btn btn-outline-light rounded-pill border-3' onClick={handleSignOut}>Logout</button>
                                :
                                <Nav className='menu-bar'>

                                    <Link to="/login"><FontAwesomeIcon className='mx-2' icon={faRightToBracket}></FontAwesomeIcon>Login</Link>
                                </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;