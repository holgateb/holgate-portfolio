import { Container, Nav, Navbar } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import logo from "../assets/img/logo-thin.png";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="75"
            // className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="https://github.com/holgateb">
                <img src={navIcon1} alt="LI" width="50" height="50" />
              </Navbar.Brand>
              <Navbar.Brand href="https://www.linkedin.com/in/benholgate/">
                <img src={navIcon2} alt="GH" width="50" height="50" />
              </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
