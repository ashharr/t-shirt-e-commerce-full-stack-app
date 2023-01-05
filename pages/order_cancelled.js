import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FcCancel } from 'react-icons/fc';

import { useStateContext } from '../context/StateContext';


const order_cancelled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <FcCancel />
        </p>
        <h2>Your Order can been cancelled.</h2>
        
        <p className="description">
          If you have any questions, please call
          <a className="email" href="mailto:order@example.com">
            +91 91233912390
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default order_cancelled
