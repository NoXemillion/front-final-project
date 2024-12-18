import React from 'react';

const SalesReport = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Sales Report</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Month</th>
            <th className="border border-gray-300 px-4 py-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.month}</td>
              <td className="border border-gray-300 px-4 py-2">{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
