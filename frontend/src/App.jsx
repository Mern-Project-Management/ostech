import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Navbar from './components/home/Navbar';
import "./App.css"
import Blog from './components/blogPage/Blog';
import BlogPage from './pages/BlogPage';
import { ProductPage } from './pages/ProductPage';
import ContactForm from './components/contactUs/contactForm';
import ContactPage from './pages/ContactPage';

import { ProductDetailPage } from './pages/ProductDetailPage';
import Resource from './pages/Resource';
function App() {
  return (
    <Router>
     
      <div className=''>
        <Routes>
          <Route path="/" element={ <Navbar />}>

          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/resources" element={<Resource />} />
        
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 