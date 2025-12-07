import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaPhoneAlt, FaEnvelope, FaHome, FaCommentDots } from "react-icons/fa";

export function IsconYouthForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    comments: "",
  });
  const [sub, issubmit] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      issubmit(false);
      const response = await axios.post(
        "https://iskconbackend.vercel.app/api/youth-form",
        formData
      );
      console.log("Server response:", response.data);

      alert("Form submitted successfully!");
      issubmit(true);
      setFormData({
        name: "",
        contact: "",
        email: "",
        address: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg lg:max-w-xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 sm:mb-10 tracking-wide">
          Iskon Youth Forum
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 sm:p-3 focus-within:ring-2 focus-within:ring-purple-500">
              <FaUser className="text-gray-400 mr-2 sm:mr-3" />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none text-sm sm:text-base"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
            >
              Contact
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 sm:p-3 focus-within:ring-2 focus-within:ring-purple-500">
              <FaPhoneAlt className="text-gray-400 mr-2 sm:mr-3" />
              <input
                id="contact"
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full outline-none text-sm sm:text-base"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 sm:p-3 focus-within:ring-2 focus-within:ring-purple-500">
              <FaEnvelope className="text-gray-400 mr-2 sm:mr-3" />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none text-sm sm:text-base"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
            >
              Address
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg p-2 sm:p-3 focus-within:ring-2 focus-within:ring-purple-500">
              <FaHome className="text-gray-400 mr-2 sm:mr-3 mt-1" />
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full outline-none resize-none text-sm sm:text-base"
                rows="2"
                placeholder="Enter your address"
                required
              ></textarea>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label
              htmlFor="comments"
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
            >
              Comments
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg p-2 sm:p-3 focus-within:ring-2 focus-within:ring-purple-500">
              <FaCommentDots className="text-gray-400 mr-2 sm:mr-3 mt-1" />
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full outline-none resize-none text-sm sm:text-base"
                rows="3"
                placeholder="Write your thoughts..."
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 sm:py-3 px-4 rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 transition-transform transform hover:scale-105 text-sm sm:text-base"
          >
            {sub ? "Submit" : "Submitting..."}
          </button>
        </form>
      </div>
    </div>
  );
}
