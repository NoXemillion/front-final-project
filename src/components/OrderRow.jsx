import React from 'react';
import OrderDetails from './OrderDetails';

const OrderRow = ({ order, handleConfirmOrder, processingOrderId }) => {
  return (
    <tr className="text-center">
      <td className="p-2 border">{order.id}</td>
      <td className="p-2 border">{order.userId}</td>
      <td className="p-2 border">{new Date(order.orderDate).toDateString()}</td>
      <td className="p-2 border">{order.totalPrice} ₸</td>
      <td className="p-2 border text-left">
        <OrderDetails items={order.items} />
      </td>
      <td className="p-2 border">
        {order.isConfirmed ? (
          <span className="text-green-600 font-semibold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirmOrder(order.id)}
            className={`px-3 py-1 rounded text-white ${
              processingOrderId === order.id
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            disabled={processingOrderId === order.id}
          >
            {processingOrderId === order.id ? 'Processing...' : 'Confirm'}
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
