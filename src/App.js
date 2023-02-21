import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';



function App() {
  return (
  
      <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
  
      </Routes>
    </Router>
    <Footer/>

    </div>
  );
}

export default App;
