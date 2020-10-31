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
                        <p>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
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
                        <p>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
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
                        <p>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
                            party la croix cardigan neutra retro tattooed copper mug. 
                            Meditation lomo biodiesel scenester cred actually godard PBR&B. 
                            Fam VHS enamel pin try-hard echo park raw denim unicorn fanny 
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
                <a className="m-2 btn">
                    PROJECTS
                </a>
            </center><br/>
            </Container>
        </div>
     );
}
 
export default Projects;