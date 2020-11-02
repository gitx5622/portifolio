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
                <a href="https://github.com/gitx5622"><button type='button' className="btnx">CONTACT ME</button></a>
                <a href="https://github.com/gitx5622"><AiFillGithub className="ai-icons"/></a>
                <a href="https://github.com/gitx5622"><FaLinkedin className="ai-icons"/></a>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
     );
}
 
export default Profile;