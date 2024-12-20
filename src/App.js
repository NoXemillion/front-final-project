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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UpdateProfile from './pages//UpdateProfile';
import RequestPasswordReset from './pages/RequestPasswordReset';
import ResetPassword from './pages/ResetPassword';


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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/request-reset-password" element={<RequestPasswordReset />} />
          <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
