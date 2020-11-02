import React from 'react'
import { Container, Col, Row, Card, CardBody, CardImg } from 'shards-react';
import profilepic from "../assets/pic.jpeg";
import Footer from './footer'
import NavBar from './navbar'

const About = () => {
    return ( 
        <div>
            <NavBar/>
        <div className="about">
            <Container>
            <h3><center>About Me</center></h3>
            <div className="underline"></div>
                <Row>
                    <Col sm={4} className="about-row">
                    <div className="about-img-container">
                    <CardImg src={profilepic} className="person-img"/>
                    </div>
                    </Col>
                    <Col sm={8} className="about-row">
                    <Card>
                        <CardBody>
                    <p className="card-body">
                    I’m vigilant, proactive and committed to ensuring safe, 
                    secure, and orderly environments. In my last incident 
                    response rating, I received a 99% against the team average, 
                    which has been at around 97% over the past three years. 
                    I like to be thorough, documenting all incidents. I’m also 
                    a lifelong learner, problem solver and with a can-do approach.
                    </p>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </div>
     );
}
 
export default About;