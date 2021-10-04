import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
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
          color: "green"
         }}
        >
          Home
       </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
          fontWeight: "bold",
          color: "green"
         }}
        >
          About US
       </NavLink>
        <NavLink
          to="/service"
          activeStyle={{
          fontWeight: "bold",
          color: "green"
         }}
        >
          Service
       </NavLink>
        
        <NavLink
          to="/other"
          activeStyle={{
          fontWeight: "bold",
          color: "green"
         }}
        >
          Others
       </NavLink>
        

</Stack>
      </Nav>
      
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;