import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import spritz from '../assets/img/spritz.webp';
import musica from '../assets/img/musica.jpeg';

const MyCard = () => {
    return (
        <Container className='container-card testo-card mb-5'>
            <h2 className='mb-5'>Cosa troverai</h2>
            <Row>
                <Col lg={6}>
                    <Card.Img variant="top" className="card-image" src={spritz} />
                </Col>
                <Col lg={6}>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center h-100'>
                        <Card.Title className='mb-3'>Aperitivo</Card.Title>
                        <Card.Text>
                            Il nostro pub offre una vasta selezione di aperitivi che soddisferanno ogni palato. Dai classici finger food alle creazioni gourmet, la nostra cucina è pronta a deliziarti con sapori unici e freschi. Ogni boccone è un'esplosione di gusto, accompagnato dalla tua scelta di bevande di prima qualità.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <div className='card-due'>
                <Row>
                    <Col lg={6}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center h-100'>
                            <Card.Title className='mb-3'>Musica dal vivo</Card.Title>
                            <Card.Text>
                                Immergiti nella nostra atmosfera vibrante, dove le note musicali si fondono con il delizioso sapore dei nostri aperitivi. Siediti, rilassati e lasciati trasportare dalla magia della musica dal vivo.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col lg={6}>
                        <Card.Img variant="top" className="card-image" src={musica} />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default MyCard;
