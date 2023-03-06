import './App.css';
import Cart from './Components/Cart/Cart';
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div >
      <Cart /> 
      <CartProvider />      
    </div>
  );
}

export default App;
