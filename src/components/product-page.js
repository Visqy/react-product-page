import NavigationBar from "./nav-bar"
import {Container, Card, Button} from "react-bootstrap"
import Footer from "./footer"
import { Product } from "../assets/images/product/product"
import { useNavigate } from "react-router-dom"

const ProductPage = () => {
    const Navigate = useNavigate();
    return (
        <>
            <NavigationBar/>
            <div className="bg_primary intro" id="start">
                    <Container className="pt-5 pb-3">
                        <p className="fw-bold fs-1 lh-1 text center">What We Offer</p>
                        <p className="h5 text center">Curious? Here are our most popular menu items.</p>
                        <br></br>
                    </Container>
                    <Container className="d-flex justify-content-center flex-wrap flex-row py-3">
                        {Product.map((data, index) => {
                            return (
                                <Card className="my-3 mx-3" border="danger" key={index} style={{ maxWidth: "18rem" }}>
                                    <Card.Img variant="top" className="img-fluid" alt={"product #"+index} src={data.thumbnail}/>
                                    <Card.Body>
                                        <Card.Title className="center">{data.name}</Card.Title>
                                        <div className="mt-3 d-flex justify-content-center">
                                            <Button className="btn btn-danger" onClick={() => Navigate("/shop#start")}>ORDER NOW</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )}
                            )}
                    </Container>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage