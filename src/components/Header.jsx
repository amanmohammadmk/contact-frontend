import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <Navbar className="shadow-lg bg-info">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} style={{textDecoration:"none",color:"#F9F6EE"}}>
                        <h1>Registar.com</h1>
                        </Link>
                       
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header