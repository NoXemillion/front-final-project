import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/";
import HeaderLayout from "./layouts/HeaderLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <HeaderLayout>
            <HomePage />
          </HeaderLayout>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
