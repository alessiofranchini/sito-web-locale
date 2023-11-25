import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import persone1 from '../assets/img/persone1.jpeg';
import persone2 from '../assets/img/persone2.jpeg';
import persone3 from '../assets/img/persone3.jpeg';
import persone4 from '../assets/img/persone4.jpeg';
import persone5 from '../assets/img/persone5.jpeg';

const Foto = () => {
    return (
        <Container className='testo-foto'>
            <h2 className='mb-5'>Le nostre foto</h2>
            <Row>
                {/* Colonna per la foto grande */}
                <Col lg={6} md={6} className="mb-3">
                    <img src={persone1} alt="Foto Grande" className="img-fluid zoomable" />
                </Col>
                {/* Colonna per le 4 foto più piccole */}
                <Col lg={6} md={6}>
                    <Row>
                        {/* Prima colonna delle 4 foto più piccole con margine inferiore */}
                        <Col md={6} className="mb-3">
                            <img src={persone2} alt="Foto Piccola 1" className="img-fluid h-100 zoomable" style={{ objectFit: 'cover' }} />
                        </Col>
                        {/* Seconda colonna delle 4 foto più piccole con margine tra le foto */}
                        <Col md={6} className="mb-3">
                            <img src={persone3} alt="Foto Piccola 2" className="img-fluid h-100 zoomable" style={{ objectFit: 'cover' }} />
                        </Col>
                        {/* Terza colonna delle 4 foto più piccole con margine inferiore */}
                        <Col md={6} className="mb-3">
                            <img src={persone4} alt="Foto Piccola 3" className="img-fluid h-100 zoomable" style={{ objectFit: 'cover' }} />
                        </Col>
                        {/* Quarta colonna delle 4 foto più piccole con margine inferiore */}
                        <Col md={6} className="mb-3">
                            <img src={persone5} alt="Foto Piccola 4" className="img-fluid h-100 zoomable" style={{ objectFit: 'cover' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Foto;
