import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);

    if (data.message === "Login successful") {
      navigate("/todo");
    }
  };

  return (
    <div className="card p-4 shadow mx-auto max-w-md">
      <h3 className="text-center mb-3">Login</h3>

      <input
        className="form-control mb-3"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mb-3"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button className="btn btn-success w-100" onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default Login;
