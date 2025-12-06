import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AdminLogin() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://iskconbackend.onrender.com/api/admin/login", {
        loginId,
        password,
      });

      if (res.data.success) {
        alert("✅ Login successful!");
        console.log("Code received:", res.data.code);

        // Navigate to desired route (e.g., /dashboard)
        navigate("/frontyouth");
      }
    } catch (error) {
      alert("❌ Invalid login ID or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        <label className="block mb-2">Login ID</label>
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
