import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home" />
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Quem somos</Link>
            <NavDropdown title="Imóveis">
              <NavDropdown.Item as={Link} to="/galeria">Vendas e locações</NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/contato">Contato</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
