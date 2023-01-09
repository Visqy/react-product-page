import {Navbar, Container, Nav, Image} from "react-bootstrap"
import logoImage from "../assets/images/logo.png"
import "../style/landingPage.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"

const NavigationBar = () => {
    const Navigate = useNavigate();
    const ref = useRef(null);
    useEffect(() => {
        const nav = ref.current;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg_primary')
            } else {
                nav.classList.remove('bg_primary')
            }
        })
    })
    return (
            <>
            <div></div>
                <Navbar collapseOnSelect fixed="top" expand="sm" className="bg_primary nav-bar" ref={ref}>
                    <Container>
                        <Navbar.Brand>
                            <a href="#home" onClick={() => Navigate("/#home")} >
                                <Image width="auto" height="50px" alt="Logo" src={logoImage}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto bg-nav">
                                <Nav.Link className="text-center" onClick={() => Navigate("/#home")} href="#home">Home</Nav.Link>
                                <Nav.Link className="text-center" onClick={() => Navigate("/about")} href="#about">About</Nav.Link>
                                <Nav.Link className="text-center" onClick={() => Navigate("/products")} href="#product">Product</Nav.Link>
                                <Nav.Link className="text-center" onClick={() => Navigate("/shop")} href="#shop">Shop</Nav.Link>
                                <Nav.Link className="text-center" onClick={() => Navigate("/#review")} href="#review">Review</Nav.Link>
                                <Nav.Link className="text-center" onClick={() => Navigate("/#contact")} href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    )
}

export default NavigationBar