import React from 'react';
import { Container, Row, Col, CardImg } from "shards-react";
import { AiFillGithub, FaLinkedin} from "react-icons/all";
import profilepic from "../assets/pic.jpeg"

 

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
                <button type='button' className="btnx">CONTACT ME</button>
                <AiFillGithub className="ai-icons"/>
                <FaLinkedin className="ai-icons"/>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
     );
}
 
export default Profile;