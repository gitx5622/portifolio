import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from "shards-react";

const Services = () => {
    return ( 
        <div className="services">
        <Container>
        <br/><h2><center>Services</center></h2><br/>
            <Row>
                <Col sm={4} xs={12}>
                <Card className="card-services">
                    <CardBody>
                    <CardTitle>Frontend Development</CardTitle>
                    <div className="underline"></div>
                    <p>Innovative Front End Developer with 3+ years experience
                         building and maintaining responsive websites in the
                          recruiting industry. Proficient in HTML, CSS, JavaScript 
                          and Angualr; plus modern libraries and frameworks.
                    </p>
                    </CardBody>
                </Card><br/><br/>
                </Col>
                <Col sm={4} xs={12}>
                <Card className="card-services">
                    <CardBody>
                    <CardTitle>Devops CI/CD</CardTitle>
                    <div className="underline"></div>
                    <p>Skilled DevOps Engineer with 2+ years of hands-on
                         experience supporting, automating, and optimizing
                          mission critical deployments, leveraging 
                          configuration management, CI/CD, and DevOps processes.
                    </p>
                    </CardBody>
                </Card><br/><br/>
                </Col>
                <Col sm={4} xs={12}>
                <Card className="card-services">
                    <CardBody>
                    <CardTitle>Backend Development</CardTitle>
                    <div className="underline"></div>
                    <p>Passionate Back-End Developer with 2+ years experience
                        building and maintaining responsive websites in the
                        recruiting industry. Proficient in Golang, and NodeJS;
                        Using Express in Node and Gin in Gloang.

                    </p>
                    </CardBody>
                </Card><br/><br/>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Services;