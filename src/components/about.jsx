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
                    Franzen af pitchfork, mumblecore try-hard kogi XOXO 
                    roof party la croix cardigan neutra retro tattooed 
                    copper mug. Meditation lomo biodiesel scenester cred
                    actually godard PBR&B. Fam VHS enamel pin try-hard
                    echo park raw denim unicorn fanny pack vape authentic.
                    Helvetica fixie church-key, small batch jianbing 
                    messenger bag scenester +1 before they sold out 
                    bespoke paleo hammock
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