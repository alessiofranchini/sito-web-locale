import React from 'react';
import { Navbar, Container, Row, Col, Nav, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.jpg';

const MyNavbar = () => {
    return (
        <div className='sfondo'>
            <Navbar bg="transparent" expand="lg" variant="light">
                <Container>
                    <Row className="w-100">
                        <Col xs={12} lg={6}>
                            <Navbar.Brand href="#" style={{ color: 'white' }}>
                                <img src={logo} alt="Logo" height="100" />
                            </Navbar.Brand>
                        </Col>
                        <Col xs={12} lg={6} className="d-flex justify-content-end">
                            <Nav>
                                <Nav.Link href="/foto" style={{ color: 'white' }}>Foto</Nav.Link>
                                <Nav.Link href="/prenota" style={{ color: 'white' }}>Contattaci</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <div className="text-center mt-5 testo-generali custom-container">
                <Row>
                    <Col>
                        <h1>Pub</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="lead">Locale con musica dal vivo</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='my-button' size="lg" href="#menu">
                            Prenota
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default MyNavbar;
