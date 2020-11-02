import React from 'react'
import { Container, Col, Row, CardBody, Card } from 'shards-react';
import Footer from './footer'
import NavBar from './navbar'

const Blog = () => {
    return ( 
        <div>
            <NavBar/>
        <div className="contact">
            <Container>
            <h3><center>Blog</center></h3>
            <div className="underline"></div>
                <Row>
                    <Col sm={4}>  
                    <iframe width="350" height="315" 
                    title="15 projects"
                    src="https://www.youtube.com/embed/a_7Z7C_JCyo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <Card className="blog-card">
                    <CardBody>
                    <h4>Learn 15 Projects</h4>
                    Advanced projects included in a udemy course or something? 
                    or maybe not yet released? I searched everywhere for the 
                    tutorial but I cant find it... thank you in advance.
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm={4}>
                    <iframe width="350" height="315" 
                    title="Mastering react"
                    src="https://www.youtube.com/embed/-cMqr9HpZ-Y" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <Card className="blog-card">
                    <CardBody>
                    <h4>Master React 2021</h4>
                    This is crazy man...I’ve been wanting to learn react 
                    for some time now and I just came across your channel..
                    the amazon clone video...And BAM this video came as a 
                    blessing the same day!!
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm={4}>
                    <iframe width="350" height="315" 
                    title="Coding with mosh"
                    src="https://www.youtube.com/embed/Ke90Tje7VS0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <Card className="blog-card">
                    <CardBody>
                    <h4>Coding With Mosh</h4>
                    Finally from this video I gained every information about 
                    react that helps to me learning real React.js concept. 
                    Thanks a lot for such an excellent video.  
                    This react tutorial is ever best among all other.
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
 
export default Blog;