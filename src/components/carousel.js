import { Carousel } from "react-bootstrap";

function importAll(r) {
    let images = {};
    r.keys().map((item) => {
        images[item.replace("./", "")] = r(item); 
        return true;
    });
    return images
}

const carouselImage = importAll(require.context('../assets/images/carousel', false, /\.jpg$/));

const RandomCarousel = () => {
    return (
        <Carousel fade style={{ height: "100%" }}>
                {Object.keys(carouselImage).map((key, index) => {
                    return (
                    <Carousel.Item key={index}>
                        <img src={carouselImage[key]} alt={"image #"+index} className="img-fluid object-fit-cover"/>
                    </Carousel.Item>
                    )
                })}
        </Carousel>   
    )
}




// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * max);
// }

// const GetRandomImage = () => {
//     const seed = getRandomInt(50);
//     return (
//             <img 
//                 src={`https://picsum.photos/1280/720?random=${getRandomInt(seed)}`}
//                 alt={"image #" + seed}
//                 className="img-fluid"
//                 />
//     );
// }

export {carouselImage, RandomCarousel}