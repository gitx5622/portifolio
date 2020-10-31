import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from "shards-react";

const Services = () => {
    return ( 
        <div className="services">
        <Container>
        <h2><center>Services</center></h2><br/>
            <Row>
                <Col sm={4} xs={12}>
                <Card className="card-services">
                    <CardBody>
                    <CardTitle>Frontend Development</CardTitle>
                    <div className="underline"></div>
                    <p>I'm baby meditation tofu chillwave, distillery
                         messenger bag thundercats chicharrones kale 
                         chips gochujang. Banh mi direct trade marfa 
                         salvia.
                    </p>
                    </CardBody>
                </Card>
                </Col>
                <Col sm={4} xs={12}>
                <Card>
                    <CardBody>
                    <CardTitle>Devops CI/CD Pipelines</CardTitle>
                    <div className="underline"></div>
                    <p>I'm baby meditation tofu chillwave, distillery
                         messenger bag thundercats chicharrones kale 
                         chips gochujang. Banh mi direct trade marfa 
                         salvia.
                    </p>
                    </CardBody>
                </Card>
                </Col>
                <Col sm={4} xs={12}>
                <Card>
                    <CardBody>
                    <CardTitle>Backend Development</CardTitle>
                    <div className="underline"></div>
                    <p>I'm baby meditation tofu chillwave, distillery
                         messenger bag thundercats chicharrones kale 
                         chips gochujang. Banh mi direct trade marfa 
                         salvia.
                    </p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Services;