import React from 'react';
import AdminHeader from '../components/AdminHeader';
const AdminHeaderLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
};

export default AdminHeaderLayout;
