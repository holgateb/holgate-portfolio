import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

function Footer() {
  return (
    <footer className="footer--pin">
      <Navbar bg="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="/">
                <img
                  href="https://github.com/holgateb"
                  src={navIcon1}
                  alt="LI"
                  width="50"
                  height="50"
                />
              </Navbar.Brand>
              <Navbar.Brand href="/">
                <img
                  href="https://www.linkedin.com/in/benholgate/"
                  src={navIcon2}
                  alt="GH"
                  width="50"
                  height="50"
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
