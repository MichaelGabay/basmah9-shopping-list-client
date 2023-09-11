import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const userNavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">shopList</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='text-white me-3 text-decoration-none' to="/">Home</Link>
                        <Link className='text-white me-3 text-decoration-none' to="/shopList">My shop list</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default userNavBar