import { Container, Row, Col } from "react-bootstrap";
import WelcomePagePhoto from "../assets/images/grad_photo_1.JPG";
import UniversityPhoto from "../assets/images/TUD-GG.jpg";
import OfficePhoto from "../assets/images/office.jpg";
import "../css/aboutme.css";

function AboutMe() {
  return (
    <Container fluid="md" className="m-auto bg-body-primary">
      <Row>
        <Col className="bg-danger py-5 text-start ">
          <span className="aboutme-title">About me as a Developer</span>
          <br></br>
          <span className="info-text">A brief overview of my background, education, and journey into software development.</span>
        </Col>
      </Row>
      <Row>
        <Col
          sm={6}
          className="bg-primary d-flex align-items-center order-0 order-sm-0"
        >
          <span className="info-text">
            My name is Yinka John Adebesin, and I am a passionate and
            conscientious developer from Dublin, Ireland. I enjoy turning ideas
            into tangible products that are both functional and meaningful. I’m
            particularly interested in the process behind building applications—
            from concept to completion—and take pride in writing clean,
            maintainable code. I’m constantly learning and motivated by creating
            solutions that can make a real difference.
          </span>
        </Col>
        <Col
          sm={6}
          className="bg-secondary d-flex align-items-center justify-content-center order-1 order-sm-1"
        >
          <img
            src={WelcomePagePhoto}
            alt="Yinka's graduation"
            className="photos"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col
          sm={6}
          className="bg-success d-flex align-items-center justify-content-center order-1 order-sm-0"
        >
          <img
            src={UniversityPhoto}
            alt="Yinka's graduation"
            className="photos"
          ></img>
        </Col>
        <Col
          sm={6}
          className="bg-info d-flex align-items-center order-0 order-sm-1"
        >
          <span className="info-text">
            I attained my Bachelor of Science degree in Computer Science
            (Infrastructure) from Technological University of Dublin –
            Grangegorman. During my time at university, I developed a solid
            foundation in software development, with a strong focus on software
            design principles such as SOLID. I also gained exposure to a wide
            range of networking concepts, which has allowed me to develop a more
            well-rounded understanding of systems and enhanced my adaptability
            across different areas of software development. Through both
            academic and practical work, I built experience across a range of
            technologies, with JavaScript as my primary language, while
            remaining open to learning new tools and frameworks.
          </span>
        </Col>
      </Row>
      <Row>
        <Col
          sm={6}
          className="info-text bg-danger d-flex align-items-center order-0 order-sm-0"
        >
          <span className="info-text">
            I am currently working as a Systems Administrator, where I gain
            hands-on experience with real-world infrastructure, networking, and
            system management. This role has strengthened my understanding of
            how software operates in production environments, from deployment to
            performance and reliability. Combined with my academic experience
            building full-stack applications, this has given me a well-rounded
            perspective on both development and the underlying systems that
            support it, allowing me to approach software engineering with a
            strong focus on scalability, efficiency, and maintainability.
          </span>
        </Col>
        <Col
          sm={6}
          className="bg-warning d-flex align-items-center justify-content-center order-1 order-sm-1"
        >
          <img
            src={OfficePhoto}
            alt="Yinka's graduation"
            className="photos"
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
