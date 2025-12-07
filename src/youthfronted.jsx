import React, { useEffect, useState } from "react";
import axios from "axios";

export function YouthList() {
  const [youths, setYouths] = useState([]);

  // Fetch all entries
  useEffect(() => {
    axios
      .get("https://iskconbackend.vercel.app/api/youths")
      .then((res) => setYouths(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Delete by email
  const handleDelete = async (email) => {
    try {
      await axios.delete(`https://iskconbackend.vercel.app/api/youths/${email}`);
      alert("User deleted successfully!");
      setYouths(youths.filter((y) => y.email !== email)); // update UI
    } catch (error) {
      alert("Failed to delete user");
      console.error(error);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Youth Entries
      </h1>

      {/* Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-purple-600 text-white text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 text-left">Name</th>
              <th className="p-2 sm:p-3 text-left">Contact</th>
              <th className="p-2 sm:p-3 text-left">Email</th>
              <th className="p-2 sm:p-3 text-left">Address</th>
              <th className="p-2 sm:p-3 text-left">Comments</th>
              <th className="p-2 sm:p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {youths.map((y) => (
              <tr
                key={y._id}
                className="border-b hover:bg-gray-50 text-xs sm:text-sm lg:text-base"
              >
                <td className="p-2 sm:p-3">{y.name}</td>
                <td className="p-2 sm:p-3">{y.contact}</td>
                <td className="p-2 sm:p-3 break-words">{y.email}</td>
                <td className="p-2 sm:p-3 break-words">{y.address}</td>
                <td className="p-2 sm:p-3">{y.comments}</td>
                <td className="p-2 sm:p-3 text-center">
                  <button
                    onClick={() => handleDelete(y.email)}
                    className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-700 transition text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
