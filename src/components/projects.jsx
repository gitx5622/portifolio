import React from 'react';
import { Container, Row, Col,Card, CardImg, CardBody} from 'shards-react';
import Carousel from 'react-bootstrap/Carousel';
import likee from "../assets/likee.png";
import likee2 from "../assets/likee2.png";
import likee3 from "../assets/likee3.png";
import eshop from "../assets/eshop.png";
import eshop2 from "../assets/eshop2.png";
import eshop3 from "../assets/eshop3.png";
import gamex from "../assets/gamex.png";
import gamex2 from "../assets/gamex2.png";
import gamex3 from "../assets/gamex3.png";

const Projects = () => {
    return ( 
        <div>
        <div className="projects d-none d-sm-block">
            <Container> 
            <h3><center><br/>PROJECTS</center></h3>
            <div className="underline"></div>
            <Row>
                <Col sm={8} className="project-card">
                <Card>
                    <CardBody>
                        <h3>Likee</h3>
                        <h4><a href="https://likee.co.ke">likee.co.ke</a></h4>
                        <p>Likee was my first project to do with react. 
                            This is a social app which resembled much of 
                            twitter with less functionality as compared. 
                            The app entailed posts where a user can login create 
                            posts after which the post can be liked by others and 
                            can comment on the posts.You can create as many posts 
                            and can be able to views all your posts, likes and comments.
                            Faced some issues with the backend side but still managed to get best 
                            of my expectations.
                        </p>
                    </CardBody>
                </Card>
                </Col>
                <Col sm={4} className="project-img">
                <Carousel className="carourex">
                    <Carousel.Item className="item">
                    <CardImg className="img" src={likee}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={likee2}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={likee3}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col sm={4} className="project-imgx">
                <Carousel className="carourex">
                    <Carousel.Item>
                    <CardImg className="img" src={eshop}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={eshop2}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={eshop3}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col sm={8} className="project-cardx">
                <Card>
                    <CardBody>
                        <h3>Eshop</h3>
                        <h4><a href="https://onlineshoppingkenya.co.ke">onlineshoppingenya.co.ke</a></h4>
                        <p>
                        Onlineshoppingkenya is an online marketplace based in Kenya for electronics, and fashion 
                        among others in Africa.The company is also a logistics service, which 
                        enables the shipment and delivery of packages from sellers to consumers,
                        and a payment service, which facilitates transactions among participants 
                        active and Onlineshoppingkenya platform in selected markets.<br/>
                        #1 Kenya's Online store for Electronics, Smartphones, Computers & Laptops, 
                        Home Appliances. Don't Miss Our Exclusive Deals Today.
                        </p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col sm={8} className="project-card">
                <Card>
                    <CardBody>
                        <h3>Gamex</h3>
                        <h4><a href="https://gamex.likee.co.ke">gamex.likee.co.ke</a></h4>
                        <p>Gamex the intersection of tech and gaming news, Techraptor brings honest, 
                            informed news coverage you won’t find in many places. Readers love the 
                            broad spectrum of news on indie games from platformers. Despite being one of the youngest nominees in this list,
                             their writing staff stands out for actively engaging with their readers.
                             One of two magazine-based gaming websites, Gamex continues to 
                             operate a print-based publication in addition to an online presence where 
                             you can find news and articles on gaming topics.
                        </p>
                    </CardBody>
                </Card>
                </Col>
                <Col sm={4} className="project-img">
                <Carousel className="carourex">
                    <Carousel.Item>
                    <CardImg className="img" src={gamex}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={gamex2}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardImg className="img" src={gamex3}/>
                    <Carousel.Caption/>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row><br/>
            <center>
                <a href="/" className="m-2 btn">
                    PROJECTS
                </a>
            </center><br/>
            </Container>
        </div>
        </div>
     );
}
 
export default Projects;