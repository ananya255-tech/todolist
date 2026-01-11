import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Todo from "./components/todo";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">

       
        <div className="text-center mb-4">
          <Link to="/register" className="btn btn-primary me-2">
            Register
          </Link>
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        </div>

      
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;