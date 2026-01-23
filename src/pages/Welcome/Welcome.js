import { Container, Nav, Row, Col } from "react-bootstrap";
import WelcomePagePhoto from "../../assets/images/grad_photo_1.JPG";
import "./welcome.css";

function Welcome() {
  return (
    <Container fluid className="d-flex m-auto">
      <Row>
        <Col lg={7} className="right-container order-lg-2">
          <p className="hero-text">
            Hello, I'm{" "}
            <span className="highlight-word">Yinka John Adebesin</span>
            , <br />a <span className="highlight-word">Graduate</span> and an
            aspiring <br />{" "}
            <span className="highlight-word">Software Engineer.</span>
          </p>
          <br />
          <p className="hero-text">
            I build clean, responsive web applications with a focus on
            usability, performance, and real-world impact. This portfolio
            showcases my projects, technical skills, and growth as a developer.
            Feel free to explore my work, learn more about me, or view my CV.
          </p>
          <br />
          <Row className="g-3">
            <Col xs="auto">
              <Nav.Link href="/" className="btn btn--downloadcv">
                Download CV
              </Nav.Link>
            </Col>
            <Col xs="auto">
              <Nav.Link href="/" className="btn btn--learnmore">
                Learn more
              </Nav.Link>
            </Col>
          </Row>
        </Col>

        <Col className="left-container">
          <img
            src={WelcomePagePhoto}
            alt="Yinka's graduation"
            className="welcome-photo"
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
