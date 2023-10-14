import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faHome, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarManu extends Component {
    handleLogout = () => {
        localStorage.removeItem('login');
       
    }

    render() {
        const isLoggedIn = localStorage.getItem('login');

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={Link} to="/">RestaurantList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} color="black" /> Home</Nav.Link>
                            <Nav.Link as={Link} to="/list"><FontAwesomeIcon icon={faList} color="black" /> List</Nav.Link>
                            <Nav.Link as={Link} to="/create"><FontAwesomeIcon icon={faPlus} color="black" /> Create</Nav.Link>
                            <Nav.Link as={Link} to="/search"><FontAwesomeIcon icon={faSearch} color="black" /> Search</Nav.Link>
                            {isLoggedIn ? (
                                <Nav.Link onClick={this.handleLogout}>
                                    <FontAwesomeIcon icon={faUser} color="black" /> Logout
                                </Nav.Link>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    <FontAwesomeIcon icon={faUser} color="black" /> Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarManu;
