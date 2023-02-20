import React, { Component } from 'react';
import Coupon from './Coupon';

 export class Cart extends Component {
  state = {
    items: [],
    total: 0,
  };

  // Functions for adding, removing, and updating items in the cart

  render() {
    return (
      <div>
        <table>
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
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td><img src={item.image} alt={item.product} /></td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => this.updateQuantity(index, e.target.value)}
                  />
                </td>
                <td>{item.price * item.quantity}</td>
                <td><button onClick={() => this.removeItem(index)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
               <div>
          <p>SubTotal: {this.state.total}</p>
          <p>Total: {this.state.total}</p>
          </div>
          <div>
          <button onClick={this.updateCart}>Update Cart</button>
          <button onClick={this.continueShopping}>Continue Shopping</button>
        </div>
        <button>PROCEED TO CHECKOUT</button>

        <div>
        <Coupon />
        </div>
      </div>
    );
  }
}
