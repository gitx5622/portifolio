import React from 'react'
import { Col, Container, Row } from 'shards-react'
import { AiFillGithub, FaLinkedin} from "react-icons/all";

const Footer = () => {
    return ( 
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                    <AiFillGithub className="footer-icons"/>
                    <FaLinkedin className="footer-icons"/>
                    <br/><br/>
                    <p>COPYRIGHT©2020<strong className="label"> WEB DEV </strong>ALL RIGHTS RESERVED</p>       
                    </Col>
                </Row>
            </Container> 
        </div>
     );
}
 
export default Footer;