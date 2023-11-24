import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import spritz from '../assets/img/spritz.webp';

const MyComponent = () => {
    return (
        <Container>
            <Row>
                {/* Foto grande a sinistra */}
                <Col lg={9} md={6}>
                    <img src={spritz} alt="Foto Grande"  />
                </Col>
                {/* 4 foto più piccole a destra, divise in due colonne */}
                <Col lg={3} md={3}>
                    <Row>
                        <Col md={12}>
                            <img src={spritz} alt="Foto Piccola 1" />
                        </Col>
                        <Col md={12}>
                            <img src={spritz} alt="Foto Piccola 2"  />
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={3}>
                    <Row>
                        <Col md={12}>
                            <img src={spritz} alt="Foto Piccola 3"  />
                        </Col>
                        <Col md={12}>
                            <img src={spritz} alt="Foto Piccola 4"  />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default MyComponent;
