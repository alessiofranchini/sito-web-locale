import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Generali = () => {
    return (
        <div className="text-center mt-5 testo-generali custom-container">
            <Row>
                <Col>
                    <h1>Bar</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lead">Local Bar with Live Music</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='my-button' size="lg" href="#menu">
                        Menù
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default Generali;
