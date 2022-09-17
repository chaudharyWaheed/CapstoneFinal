import React from "react";


const Buyer = () => {
  return (
    <div className='user-container'>
      <div className='dashboard'>
        <h2>Hi Waheed!</h2>
        <button>Switch to Seller</button>
      </div>
      <ul className='controls'>
        <li>Profile</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
      
    </div>
  );
};

export default Buyer;