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
                </div>
                <Link to="/contact"><button type='button' className="btnx">CONTACT ME</button></Link>
                <AiFillGithub className="ai-icons"/>
                <a href="https://github.com/gitx5622">https://github.com/gitx5622</a><br/>
                <FaLinkedin className="ai-icons"/>
                <a href="https://github.com/gitx5622">www.linkedin.com/in/george-ndungu-432bbb191</a>
            </Col>
        </Row>
        </Container>
        </div>
     );
}
 
export default Profile;