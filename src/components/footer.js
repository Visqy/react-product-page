import "../style/landingPage.css"
import {Row, Col} from "react-bootstrap"
import {RandomCarousel} from "./carousel";

const Footer = () => {
        return (
        <div className="bg_black" id="contact">
                <Row className="me-0">
                    <Col sm={8} className="px-0">
                        <RandomCarousel/>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center text-fluid px-0">
                        <div className="py-5 px-3">
                            <div>
                                <p className="h5 text_white">OPENING HOURS</p>
                                <p className="text_white">Mon - Fri: 7am - 10pm​</p>
                                <p className="text_white">Saturday: 8am - 10pm</p>
                                <p className="text_white">Sunday: 8am - 11pm</p>
                            </div>
                            <br></br>
                            <div>
                                <p className="h5 text_white">LOCATION</p>
                                <p className="text_white">123 Anywhere St. Any City, ST 12345</p>
                            </div>
                            <br></br>
                            <div>
                                <p className="h5 text_white">FOLLOW US ON</p>
                                <p className="text_white">Instagram</p>
                                <p className="text_white">Facebook</p>
                                <p className="text_white">Twitter</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default Footer;