import React from 'react'
import { Container, Col, Row, Card, CardBody} from 'shards-react';
import Footer from './footer'
import NavBar from './navbar'

const Contact = () => {
    return ( 
        <div>
            <NavBar/>
        <div className="contact">
            <Container>
            <h3><center>Contact</center></h3>
            <div className="underline"></div>
                <Row>
                    <Col className="col-md-6 offset-md-3 about-row">
                    <Card>
                        <CardBody>
                        <form>
                        <div class="form-group">
                            <input type="text" class="form-control contact-input" placeholder="NAME"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control contact-input" placeholder="EMAIL"/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control contact-input" placeholder="MESSAGE"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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
 
export default Contact;