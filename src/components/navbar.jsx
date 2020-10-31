import React from 'react';
import { Col, Container, Nav, Navbar, NavItem, NavLink } from 'shards-react';


const NavBar = () => {
    return ( 
        <div className="navbarx">
        <Navbar expand="md">
            <Container>
                <Col sm={6} xs={12}><h3>Web Dev</h3></Col>
                <Col sm={2} xs={12}></Col>
                <Col sm={4} xs={12}>
                <Nav navbar>
                    <NavItem className="d-none d-sm-block">
                    <NavLink active href="/">
                        Home
                    </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-block">
                    <NavLink active href="/about">
                        About
                    </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-block">
                    <NavLink active href="/projects">
                        Projects
                    </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-block">
                    <NavLink active href="/blog">
                        Blog
                    </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-block">
                    <NavLink active href="/contact">
                        Contact
                    </NavLink>
                    </NavItem>
                </Nav>
                </Col>
                </Container>
        </Navbar>
        </div>
     );
}
 
export default NavBar;