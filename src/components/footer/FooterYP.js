import { Container, Row, Col } from "react-bootstrap";
import YouTube from "../../assets/icons/YouTube.js";
import GitHub from "../../assets/icons/GitHub.js";
import Instagram from "../../assets/icons/Instagram.js";
import LinkedIn from "../../assets/icons/LinkedIn.js";
import "./footer.css";

function FooterYP() {
  return (
    <div className="FooterYP">
      <Container>
        <hr className="footer-divider" />
        <Row className="justify-content-center text-center">
          <Col
            md={4}
            className="align-items-center d-flex justify-content-center"
          >
            <h1 className="footer-brand mb-0">YinkaAdebesin</h1>
          </Col>
          <Col
            md={4}
            className="align-items-center d-flex justify-content-around"
          >
            <a
              href="https://www.youtube.com/@yinkaadebesin/videos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <YouTube className="socials-icon youtube" />
            </a>
            <a
              href="https://www.instagram.com/yinkaadebesin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="socials-icon instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/yinkajohnadebesin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn className="socials-icon linkedin" />
            </a>

            <a
              href="https://github.com/yinkajohnadebesin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub className="socials-icon github" />
            </a>
          </Col>
          <Col
            md={4}
            className="align-items-center d-flex justify-content-center"
          >
            <p>Available for opportunities</p>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-5">
          <Col
            md={4}
            className="align-items-center d-flex flex-column justify-content-center"
          >
            <p>© {new Date().getFullYear()} • Yinka John Adebesin.</p>
            <p>All rights reserved</p>
          </Col>
          <Col
            md={4}
            className="align-items-center d-flex justify-content-center"
          >
            <p>Dublin, Ireland</p>
          </Col>
          <Col
            md={4}
            className="align-items-center d-flex justify-content-center"
          ></Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterYP;
