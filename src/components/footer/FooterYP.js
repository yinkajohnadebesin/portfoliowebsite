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
            xs={12}
            sm={4}
            className="align-items-center d-flex justify-content-center my-3 my-sm-3"
          >
            <h1 className="footer-brand mb-0">YinkaAdebesin</h1>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="align-items-center d-flex justify-content-around my-3 my-sm-3"
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
            xs={12}
            sm={4}
            className="align-items-center d-flex justify-content-center my-3 my-sm-3"
          >
            <p>Available for opportunities</p>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col
            xs={12}
            sm={4}
            className="align-items-center d-flex flex-column justify-content-center my-3 my-sm-3"
          >
            <p>© {new Date().getFullYear()} • Yinka John Adebesin.</p>
            <p>All rights reserved</p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="align-items-center d-flex justify-content-center my-3 my-sm-3"
          >
            <p>Dublin, Ireland</p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="align-items-center d-flex justify-content-center my-3 my-sm-3"
          ></Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterYP;
