import "../style/landingPage.css"
import {Button, Image, Container, Row, Col} from "react-bootstrap"
import IllustrationImage from "../assets/images/ayam_ill.png"

const Intro = () => {
    return (
        <div className="intro bg_primary py-5" id="home">
            <Container>
                <Row className="flex-column-reverse flex-md-row">
                    <Col sm={true} className="d-flex align-items-center text-fluid">
                        <div>
                            <p className="header">Ayam</p>
                            <p className="header">Gebrek</p>
                            <br></br>
                            <p className="h4">Delicious food for every mood</p>
                            <br></br>
                            <div className="mb-2">
                                <Button size="lg" className="btn btn-danger" href="#">ORDER NOW</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={true}>
                        <Image className="img-fluid" alt="Logo" src={IllustrationImage}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;