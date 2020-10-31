import React from 'react';
import { Col, Container, Nav, Navbar, NavItem, NavLink } from 'shards-react';


const NavBar = () => {
    return ( 
        <div className="navbarx">
        <Navbar expand="md">
            <Container>
                <Col sm={6}><h3>Web Dev</h3></Col>
                <Col sm={2}></Col>
                <Col sm={4}>
                <Nav navbar>
                    <NavItem>
                    <NavLink active href="#">
                        Home
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink active href="#">
                        About
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink active href="#">
                        Projects
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink active href="#">
                        Blog
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink active href="#">
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