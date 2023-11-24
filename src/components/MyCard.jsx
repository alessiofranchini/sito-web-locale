import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import spritz from '../assets/img/spritz.webp';

const MyCard = () => {
    return (
        <Container className='container-card testo-card'>
            <Row>
                <Col lg={6}>
                    <Card.Img variant="top" className="card-image" src={spritz} />
                </Col>
                <Col lg={6}>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center h-100'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <div className='card-due'>
                <Row>
                    <Col lg={6}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center h-100'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col lg={6}>
                        <Card.Img variant="top" className="card-image" src={spritz} />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default MyCard;
