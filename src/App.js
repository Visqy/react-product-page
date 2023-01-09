import Intro from './components/intro';
import NavigationBar from './components/nav-bar';
import About from './components/about';
import ProductSection from './components/product-section';
import Review from './components/review';
import Footer from './components/footer';
import ProductPage from './components/product-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about-page';
import ShopPage from './components/shop-page';

const LandingPage = () => {
  return (
   <div>
      <NavigationBar />
      <Intro />
      <About/>
      <ProductSection/>
      <Review />
      <Footer/>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="products" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
