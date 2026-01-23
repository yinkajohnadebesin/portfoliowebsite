import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import closeIcon from "../../assets/images/close.png";
import menuIcon from "../../assets/images/menu.png";

function NavbarYP() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="NavbarYP">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(val) => setExpanded(val)}
        className="main-navbar"
      >
        <Container>
          <Navbar.Brand href="/" className="site-title mx-0">
            <span className="d-none d-sm-inline ">YinkaAdebesin</span>
            <span className="d-inline d-sm-none">YA</span>
          </Navbar.Brand>

          <Nav className="mx-auto mx-lg-0 order-lg-3">
            <Nav.Link href="/" className="btn btn--contactme">
              Contact me ➜
            </Nav.Link>
          </Nav>

          <Navbar.Toggle
            aria-controls="main-nav"
            className="order-lg-2"
          >
            <img
              src={expanded ? closeIcon : menuIcon}
              alt="Menu"
              className="menu-icon"
            />
          </Navbar.Toggle>

          <Navbar.Collapse id="main-nav" className="order-lg-1">
            <Nav className="nav-links mx-auto">
              <Nav.Link href="/" className="nav-items">
                ABOUT ME
              </Nav.Link>
              <Nav.Link href="/" className="nav-items">
                PROJECTS
              </Nav.Link>
              <Nav.Link href="/" className="nav-items">
                SKILLS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarYP;
