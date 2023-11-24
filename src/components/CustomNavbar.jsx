import React from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="transparent" expand="lg" variant="light">
            <Container>
                <Row className="w-100">
                    <Col xs={12} lg={6}>
                        <Navbar.Brand href="#" style={{ color: 'white' }}>
                            {/* Inserisci qui il tuo logo */}
                            {/* Esempio: <img src="logo.png" alt="Logo" height="30" /> */}
                            Logo
                        </Navbar.Brand>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-end">
                        <Nav>
                            <Nav.Link href="#" style={{ color: 'white' }}>Posizione</Nav.Link>
                            <Nav.Link href="#" style={{ color: 'white' }}>Menù</Nav.Link>
                            <Nav.Link href="#" style={{ color: 'white' }}>Contattaci</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
