// Coupon.js

import React, { Component } from 'react';

class Coupon extends Component {
  state = {
    couponCode: ''
  };

  handleCouponChange = (event) => {
    this.setState({ couponCode: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Coupon</p>
        <label>
          Enter your coupon code if you have one
          </label>
          <div>
          <label>
          <input type="text"  placeholder='Coupon Code' value={this.state.couponCode} onChange={this.handleCouponChange} />
          <button>Apply Coupon</button>
        </label>
        </div>
      </div>
    );
  }
}

export default Coupon;
