import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="card p-4 shadow mx-auto max-w-md">
      <h3 className="text-center mb-3">Register</h3>

      <input
        className="form-control mb-3"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

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

      <button className="btn btn-primary w-100" onClick={registerUser}>
      Register
      </button>
    </div>
  );
}

export default Register;
