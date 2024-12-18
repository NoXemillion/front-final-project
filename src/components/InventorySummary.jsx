import React from 'react';

const InventorySummary = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Inventory Summary</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.product}</td>
              <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventorySummary;
