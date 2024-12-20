import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, ShopPage } from "./pages/";
import HeaderLayout from "./layouts/HeaderLayout";
import AdminHeaderLayout from "./layouts/AdminHeaderLayout";
import AdminHome from "./pages/AdminHome";
import InventoryManagement from "./pages/InventoryManagement";
import ProductManagement from "./pages/ProductManagement";
import OrderManagement from "./pages/OrderManagement";
import UserManagement from "./pages/UserManagement";
import ContentManagement from "./pages/CMS";
import ReportsAndAnalytics from "./pages/Reports";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <HeaderLayout>
            <HomePage />
          </HeaderLayout>
          } 
        />
        <Route path="/shop" element={
          <HeaderLayout>
            <ShopPage />      
          </HeaderLayout>
          }
         />
         <Route path="/product/:id" element={
          <HeaderLayout>
            <ProductPage />      
          </HeaderLayout>
          }
          />
          <Route path="/admin" element={
            <AdminHeaderLayout>
              <AdminHome />
            </AdminHeaderLayout>
          } />
          <Route path="/admin/inventory" element={
            <AdminHeaderLayout>
              <InventoryManagement />
            </AdminHeaderLayout>
          } />
          <Route path="/admin/products" element={
            <AdminHeaderLayout>
              <ProductManagement />
            </AdminHeaderLayout>
          } />
           <Route path="/admin/orders" element={
            <AdminHeaderLayout>
              <OrderManagement />
            </AdminHeaderLayout>
          } />
          <Route path="/admin/users" element={
            <AdminHeaderLayout>
              <UserManagement />
            </AdminHeaderLayout>
          } />
          <Route path="/admin/cms" element={
            <AdminHeaderLayout>
              <ContentManagement />
            </AdminHeaderLayout>
          } />
           <Route path="/admin/reports" element={
            <AdminHeaderLayout>
              <ReportsAndAnalytics />
            </AdminHeaderLayout>
          } />
      </Routes>
    </Router>
  );
}

export default App;
