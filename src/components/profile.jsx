import React from 'react';
import { Container, Row, Col, CardImg } from "shards-react";
import { AiFillGithub, FaLinkedin} from "react-icons/all";
import profilepic from "../assets/pic.jpeg";
import { Link } from "react-router-dom";
 

const Profile = () => {
    return ( 
        <div className="profile">
        <Container>
        <Row>
            <Col sm={5}>
                <div className="img-container">
                <CardImg src={profilepic} className="person-img"/>
                </div>
            </Col>
            <Col sm={7} className="profile-col1">
                <div className="profile-desc">
                <div className="underlinex"></div>
                <h1>I'm George</h1>
                <h4>Web Developer and Devops Engineer</h4>
                <Link to="/contact"><button type='button' className="btnx">CONTACT ME</button></Link>
                <Link to="/contact"><AiFillGithub className="ai-icons"/></Link>
                <Link to="/contact"><FaLinkedin className="ai-icons"/></Link>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
     );
}
 
export default Profile;