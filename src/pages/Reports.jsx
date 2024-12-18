import React from 'react';
import SalesReport from '../components/SalesReport';
import CustomerActivity from '../components/CustomerActivity';
import InventorySummary from '../components/InventorySummary';

const ReportsAndAnalytics = () => {
  
  const salesReport = [
    { month: 'January', sales: 1000 },
    { month: 'February', sales: 1500 },
    { month: 'March', sales: 1200 },
  ];

  const customerActivity = [
    { user: 'John Doe', lastLogin: '2024-12-01', activity: 'Purchased product' },
    { user: 'Jane Smith', lastLogin: '2024-12-05', activity: 'Added item to cart' },
  ];

  const inventorySummary = [
    { product: 'Laptop', stock: 20 },
    { product: 'Smartphone', stock: 50 },
    { product: 'Headphones', stock: 100 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports and Analytics</h1>

      <SalesReport data={salesReport} />
      <CustomerActivity data={customerActivity} />
      <InventorySummary data={inventorySummary} />
    </div>
  );
};

export default ReportsAndAnalytics;
