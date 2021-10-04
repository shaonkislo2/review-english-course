import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="headerStyle">
            <Navbar  expand="lg">
  <Container >
    <Navbar.Brand href="#">British Council</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Stack direction="horizontal" gap={5}>
        <NavLink
          to="/home"
          activeStyle={{
          fontWeight: "bold",
          color: "white"
         }}
        >
          Home
       </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
          fontWeight: "bold",
          color: "white"
         }}
        >
          About US
       </NavLink>
        <NavLink
          to="/service"
          activeStyle={{
          fontWeight: "bold",
          color: "white"
         }}
        >
          Service
       </NavLink>
        
        <NavLink
          to="/other"
          activeStyle={{
          fontWeight: "bold",
          color: "white"
         }}
        >
          Others
       </NavLink>
        

</Stack>
      </Nav>
      
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;