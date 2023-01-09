import { Container } from "react-bootstrap";
import Footer from "./footer";
import NavigationBar from "./nav-bar";
import { carouselImage } from "./carousel";
import { Carousel } from "react-bootstrap";
import "../style/landingPage.css"


const AboutPage = () => {
    return (
        <>
            <NavigationBar/>
            <Carousel fade>
                {Object.keys(carouselImage).map((key, index) => {
                    return (
                    <Carousel.Item key={index} style={{ maxHeight: "30rem" }}>
                        <img src={carouselImage[key]} alt={"image #"+index} className="img-fluid w-100 object-fit-cover"/>
                        <Carousel.Caption className="vh-center">
                            <br></br>
                            <p className="header">About</p>
                            <p className="header">Ayam Geprek</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>   
            <Container className="py-5">
                <div className="p-3">
                    <p className="fs-6">Sejak tahun 2002 Ayam Geprek Istimewa konsisten menghadirkan pengalaman kuliner seluruh keluarga dengan citarasa yang khas: lezat, sehat dan berkualitas. Dan bukan hanya ayam, kami juga memiliki variasi hidangan yang cukup beragam untuk memenuhi selera anda.</p>
                    <p className="fs-6">Nama ayam geprek mungkin trendi belakangan ini, namun sejak awal berdiri di tahun 2002 dan memulai berjualan di garasi rumah hingga hari ini, Ayam Geprek Istimewa selalu konsisten menyajikan ayam geprek dan ragam menu lainnya dengan standar kualitas rasa yang sama sejak kami memulainya. Bermula dari resep dan cara memasak yang kami pelajari dari orang tua dan lantas digabungkan dengan metode dan standar kualitas yang modern. Berani kami pastikan, kamilah pelopor Ayam Geprek, dan tentu saja yang paling istimewa. Anda akan langsung tahu bedanya begitu mencobanya.</p>
                    <p className="fs-6">Untuk menghasilkan menu ayam, iga dan daging yang lembut dan sangat gurih meresap, dapur kami menggunakan teknik memasak slow cooking yang membuat semua bumbu dan rempah meresap sampai ke tulang. Kami menggunakan paduan bumbu dan rempah tradisional Indonesia sehingga rasanya pas di lidah. Semua sayuran kami proses dadakan sesaat setelah anda memesan sehingga kesegaran rasanya terjamin. Ayam Geprek Istimewa selalu menggunakan bahan makanan dan minuman terbaik yang ada di pasar lokal sehingga lebih fresh, terjamin kualitasnya serta turut menggerakkan ekonomi setempat.</p>
                    <p className="fs-6">Saat ini kami memiliki 6 outlet yang tersebar di wilayah Bogor. Silakan kunjungi salah satunya, dan rasakan serunya pengalaman kuliner untuk anda sekeluarga.</p>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default AboutPage;