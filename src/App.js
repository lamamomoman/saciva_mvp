import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports.
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { PageNotFound } from './Components/404';
import './Style/index.css';
import './Style/Global.css';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Page not found, 404 */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
