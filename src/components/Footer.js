import {Nav, Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

function Footer() {
  return (
    <footer className="footer--pin">
      <Navbar bg="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container class="w-100 me-auto">
            <Nav>
              <Navbar.Brand href="https://github.com/holgateb">
                <img src={navIcon1} alt="LI" width="50" height="50" />
              </Navbar.Brand>
              <Navbar.Brand href="https://www.linkedin.com/in/benholgate/">
                <img src={navIcon2} alt="GH" width="50" height="50" />
              </Navbar.Brand>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
}

export default Footer;
