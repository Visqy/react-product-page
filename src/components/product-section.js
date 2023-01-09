import "../style/landingPage.css"
import {Card, Col, Button, Container, Row} from "react-bootstrap"
import {Product} from "../assets/images/product/product"
import { useNavigate } from "react-router-dom"

const ProductSection = () => {
    const Navigate = useNavigate();
    return (
        <div className="bg_primary" id="product">
            <Container>
                <Row className="d-flex justify-content-center pt-5 pb-3">
                    <div>
                        <p className="fw-bold fs-1 lh-1 text center">What We Offer</p>
                        <p className="h5 text center">Curious? Here are our most popular menu items.</p>
                        <br></br>
                    </div>
                </Row>
                <Row className="d-flex flex-row justify-content-center">
                {Product.slice(0, 3).map((data, index) => {
                    return (
                    <Col className="pt-3 pb-3" key={index}>
                        <Card className="mt-3 mb-3" border="danger" key={index}>
                            <Card.Img variant="top" className="img-fluid" alt={"product #"+index} src={data.thumbnail}/>
                            <Card.Body>
                                <Card.Title className="center">{data.name}</Card.Title>
                                <div className="mt-3 d-flex justify-content-center">
                                    <Button className="btn btn-danger" onClick={() => Navigate("/shop#start")}>ORDER NOW</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    )})}
                </Row>
                <br></br>
                <div className="pt-3 pb-5 d-flex justify-content-center">
                    <Button onClick={() => Navigate("/products#start")} size="lg" className="btn btn-danger">VIEW FULL MENU</Button>
                </div>
            </Container>
        </div>
    );
}

export default ProductSection;