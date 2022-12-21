import { Carousel, Container } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

function Projects() {
  return (
    <Container id="projects">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <Carousel style={{ width: "100%", padding: "20px" }} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg1} alt="First Slide" />
          <Carousel.Caption>
            <h3>Quote Me, Senpai!</h3>
            <p>A quiz to test anime knowledge... Do you know who said what?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg2} alt="Second slide" />

          <Carousel.Caption>
            <h3>You Brew U(niversity)</h3>
            <p>
              The perfect web application for home brewing. This website allows
              users to share their home recipes and discover new recipes posted
              by other brewers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg3} alt="Third slide" />

          <Carousel.Caption>
            <h3>toTask</h3>
            <p>
              toTask is an app for anyone with a task that needs to be done, and
              for anyone that wants to make money completing a task.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg4} alt="Fourth Slide" />
          <Carousel.Caption>
            <h3>Secure Password Generator</h3>
            <p>
              A password generator built in javascript. It asks the user a
              series of questions about the types of characters that they want
              and then generates a unique password.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg5} alt="Fifth slide" />

          <Carousel.Caption>
            <h3>HTML Portfolio</h3>
            <p>The first portfolio I made using just HTML and CSS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={projImg6} alt="Sixth slide" />

          <Carousel.Caption>
            <h3>Readme Generator</h3>
            <p>
              This application was created to generate a high-quality,
              professional README depending on a series of questions a user
              answers in their command line using Node.js.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;
