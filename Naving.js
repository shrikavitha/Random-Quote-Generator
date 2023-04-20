import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="www.linkedin.com/in.">Shrikavitha.S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=".twitter-button{
  background:aqua;
}
.twitter-button:hover {
  color: #38a1f3;
  filter: brightness(120%);
}
  
.fa-twitter {
  font-size: 1.5rem;
  color: #38a1f3;
}">727721euec144@skcet.ac.in</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="www.linkedin.com/in.">Quotes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Author
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;