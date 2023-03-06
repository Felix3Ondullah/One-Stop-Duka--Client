import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Cart.css"
import Coupon from './Coupon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'data:image/jpeg;base64,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',
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'data:image/jpeg;base64,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',
      price: 30,
      quantity: 2,
    },
  ]);
  const [coupon, setCoupon] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const validateCoupon = () => {
    // Your coupon validation logic here
  };

  const applyCoupon = () => {
    const discount = validateCoupon();
    if (discount) {
      setTotal(subtotal - discount);
    }
  };

  const calculateTotal = () => {
    const sub = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(sub);
    setTotal(sub);
  };

  const handleCheckout = () => {
    // Your checkout logic here
  };

  return (
    <div>
      <table style={{backgroundColor:'white', padding:'10px', width:'100%', border:' 1px solid black',textAlign:'center',   bordercollapse:'collapse'}}>
        <thead>
          <tr>
          <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{position:'absolute', bottom:150, left: 60}}>
        <p>Coupon </p>
        <p>Enter your coupon code if you have one.</p>
        <input type="text" placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
        <button style={{backgroundColor:'black', color:'white', font: 18}} onClick={applyCoupon}>Apply Coupon</button>
      </div>
      <div style={{position:'absolute', bottom: 375, right: 30}}>
      <p>CART TOTALS</p>
        <span >Subtotal: ${subtotal}</span>
        <span>Total: ${total}</span>
      </div>
      <div style={{height:'150px', padding:'25px', position:'absolute', left: 0, fontSize: 16,}}>
      <div>
    <button style={{backgroundColor:'black', color:'white', position:'relative',left:30,bottom: -30, fontSize: 16, padding: '10px 12px',lineHeight: 0.5,
  border: '1px solid', textTransform: 'none', textAlign: 'center'}} onClick={calculateTotal}>
      Update Cart
      </button>
    
</div>
      <div>
      <button style={{position:'relative', left:180, padding: '10px 12px',
  border: '1px solid', fontSize: 16, lineHeight: 0.5,  textTransform: 'none', textAlign: 'center'}} >
        Continue Shopping
        </button>
        </div>
        <div>
        <button style={{backgroundColor:'black', color:'white', position: 'absolute', bottom: 50, right: -1600, fontSize: 16,
      }} onClick={handleCheckout}>
        Proceed to Checkout
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// export class Cart extends Component {
//   state = {
//     items: [],
//     total: 0,
//   };

//   // Functions for adding, removing, and updating items in the cart

//   render() {
//     return (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.items.map((item, index) => (
//               <tr key={index}>
//                 <td><img src={item.image} alt={item.product} /></td>
//                 <td>{item.product}</td>
//                 <td>{item.price}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => this.updateQuantity(index, e.target.value)}
//                   />
//                 </td>
//                 <td>{item.price * item.quantity}</td>
//                 <td><button onClick={() => this.removeItem(index)}>Remove</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//                <div>
//           <p>SubTotal: {this.state.total}</p>
//           <p>Total: {this.state.total}</p>
//           </div>
//           <div>
//           <button onClick={this.updateCart}>Update Cart</button>
//           <button onClick={this.continueShopping}>Continue Shopping</button>
//         </div>
//         <button>PROCEED TO CHECKOUT</button>

//         <div>
//         <Coupon />
//         </div>
//       </div>
//     );
//   }
// }

