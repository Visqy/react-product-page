import "../style/landingPage.css"
import {Image, Container, Row, Col, Card} from "react-bootstrap"
import defaultStar from "../assets/images/star_default.png"
import fullStar from "../assets/images/star_full.png"
import { Client } from "../assets/images/client/client"


const Review = () => {
    return (
        <div className="bg_secondary" id="review">
            <Container>
                <Row className="d-flex justify-content-center pt-5 pb-3">
                    <div>
                        <p className="fw-bold fs-1 lh-1 text_white center">What Our Clients Say</p>
                        <br></br>
                    </div>
                </Row>
                <Row className="pt-3 pb-3">
                    {Client.map((data, index) => {
                        return (
                            <Col sm={4} key={index}>
                                <Row className="pt-3 pb-3">
                                <img className="w-50 h-auto mx-auto rounded-circle shadow-4-strong pt-3 pb-3" alt={"client #" + index} src={data.thumbnail}/>
                                <div className="bg_secondary">
                                    <Card.Title className="text_white center">{data.name}</Card.Title>
                                    <Card.Text className="text_white center">{data.description}</Card.Text>
                                </div>
                                <div className="d-flex justify-content-center pt-3 pb-3">
                                    {[...Array(data.rating)].map((e, i) => <Image className="w-10 h-auto shadow-4-strong" alt={"star #" + i} key={i} src={fullStar}/>)}
                                    {[...Array(5 - data.rating)].map((e, i) => <Image className="w-10 h-auto shadow-4-strong" alt="star" key={i} src={defaultStar}/>)}
                                </div>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Review;