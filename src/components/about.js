import "../style/landingPage.css"
import {Button, Row, Col} from "react-bootstrap"
import {RandomCarousel} from "./carousel";

const About = () => {
    return (
        <div className="bg_secondary" id="about">
                <Row className="me-0">
                    <Col sm={8} className="px-0">
                        <RandomCarousel/>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center text-fluid px-0">
                        <div className="px-3 py-5">
                            <p className="fw-bold fs-1 lh-1 text_white">All About</p>
                            <p className="fw-bold fs-1 lh-1 text_white">Ayam Geprek</p>
                            <br></br>
                            <p className="fs-6 text_white">We have been serving irresistible comfort food since 1999. Our mission is to keep you smiling with every bite.</p>
                            <p className="fs-6 text_white">Treat yourself to a feel-good meal today!</p>
                            <br></br>
                            <div className="mb-2">
                                <Button size="lg" className="btn btn-dark" href="#">LEARN MORE</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default About;