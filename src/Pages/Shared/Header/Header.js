import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='mb-custom'>
            <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <img
                            width='139px'
                            height='45px'
                            src='https://i.ibb.co/S3SpPN2/4208928-ai-1.png'
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-3' as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className='me-3' as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link className='me-3' as={HashLink} to="/home#blogs">Blog</Nav.Link>
                            <Nav.Link className='me-3' as={Link} to="/contactUs">Contact Us</Nav.Link>
                            {
                                user.email && <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/myOrders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addANewService">Add A New Service</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageAllOrders">Manage All Orders</NavDropdown.Item>
                                </NavDropdown>
                            }
                            {user.email ?
                                <button className='button-design' onClick={logout}>Logout</button>
                                :
                                <Nav.Link className='button-design px-4 text-white' as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;