import React from 'react';

const OrderDetails = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <span>{item.productName}</span>
            <br />
            <span className="text-gray-500">
              {item.quantity} pcs x {item.unitPrice} ₸ = {item.totalPrice} ₸
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderDetails;
