import React, { useEffect, useState } from "react";
import axios from "axios";

export function YouthList() {
  const [youths, setYouths] = useState([]);

  // Fetch all entries
  useEffect(() => {
    axios.get("https://iskconbackend.onrender.com/api/youths")
      .then(res => setYouths(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Delete by email
  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/youths/${email}`);
      alert("User deleted successfully!");
      setYouths(youths.filter(y => y.email !== email)); // update UI
    } catch (error) {
      alert("Failed to delete user");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Youth Entries</h1>
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Email</th>
            <th className="p-3">Address</th>
            <th className="p-3">Comments</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {youths.map((y) => (
            <tr key={y._id} className="border-b hover:bg-gray-50">
              <td className="p-3">{y.name}</td>
              <td className="p-3">{y.contact}</td>
              <td className="p-3">{y.email}</td>
              <td className="p-3">{y.address}</td>
              <td className="p-3">{y.comments}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(y.email)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
