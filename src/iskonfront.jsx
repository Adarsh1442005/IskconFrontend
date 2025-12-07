import React from "react";
import temple from "./iskontemple.jpg";
import bhagvat from "./bhagvat.jpg";
import chanting from "./chanting.jpg";
import president from "./president.jpg";
import { Link } from "react-router-dom";

export function IskconAzamgarh() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-pink-50 to-purple-100 min-h-screen font-serif">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide font-sans text-yellow-100">
          ✨ ISKCON Azamgarh ✨
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto italic text-yellow-50">
          "Chant Hare Krishna and be happy" — the eternal mantra for peace, devotion, and liberation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            to="/iskon"
            className="w-full sm:w-auto bg-green-600 px-6 py-3 rounded-lg text-white text-lg sm:text-2xl font-bold shadow-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
          >
            📝 Fill Youth Form
          </Link>

          <Link
            to="/youthadmin"
            className="w-full sm:w-auto bg-green-600 px-6 py-3 rounded-lg text-white text-lg sm:text-2xl font-bold shadow-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
          >
            📝 Youth Admin
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-purple-700">
          🌸 Benefits of Chanting Hare Krishna
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transition border-t-4 border-yellow-400">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-pink-600">Inner Peace</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Chanting Hare Krishna calms the mind, reduces stress, and brings deep inner satisfaction.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transition border-t-4 border-purple-600">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-pink-600">Spiritual Connection</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              It connects the soul with Krishna, awakening devotion and love beyond material boundaries.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transition border-t-4 border-green-600">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-pink-600">Positive Lifestyle</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Regular chanting inspires compassion, discipline, and a joyful outlook on life.
            </p>
          </div>
        </div>
      </section>

      {/* President Section */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-pink-700">
          🙏 Message from the Temple President
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg p-6 sm:p-8 border-l-8 border-yellow-400">
          <img
            src={president}
            alt="Temple President"
            className="w-32 h-32 sm:w-52 sm:h-52 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 object-cover border-4 border-purple-600"
          />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4">HG Ojaswi Govind Prabhuji</h3>
            <p className="text-gray-700 italic text-sm sm:text-base">
              "Our mission at ISKCON Azamgarh is to spread the holy names of Krishna, share the wisdom of the Bhagavad Gita, and inspire everyone to live a life of devotion, compassion, and joy."
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-purple-700">
          🖼️ Spiritual Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-b-4 border-yellow-400">
            <img src={temple} alt="ISKCON Temple" className="w-full h-48 sm:h-60 object-cover" />
            <p className="p-4 text-center text-purple-600 text-sm sm:text-base">ISKCON Azamgarh Temple</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-b-4 border-green-600">
            <img src={chanting} alt="Devotees Chanting" className="w-full h-48 sm:h-60 object-cover" />
            <p className="p-4 text-center text-purple-600 text-sm sm:text-base">Devotees Chanting Hare Krishna</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-b-4 border-pink-500">
            <img src={bhagvat} alt="Bhagavad Gita" className="w-full h-48 sm:h-60 object-cover" />
            <p className="p-4 text-center text-purple-600 text-sm sm:text-base">Wisdom of Bhagavad Gita</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 text-white text-center py-10 mt-10 px-4">
        <p className="italic mb-6 text-sm sm:text-lg">© 2025 ISKCON Azamgarh | Hare Krishna 🙏</p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-10">
          <a
            href="https://www.instagram.com/iskcon_azamgarhofficial/?igsh=MXg5NDk0cWt5eHhuMw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-pink-600 px-6 py-3 rounded-lg text-white text-base sm:text-xl font-bold shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
          >
            🌸 <span>Instagram</span>
          </a>

          <a
            href="https://youtube.com/@iskconazamgarh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-red-600 px-6 py-3 rounded-lg text-white text-base sm:text-xl font-bold shadow-lg hover:bg-red-700 transition transform hover:scale-105"
          >
            📺 <span>YouTube</span>
          </a>

          <a
            href="https://chat.whatsapp.com/LM8auBzAuNg9Pkehdv71tj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-green-600 px-6 py-3 rounded-lg text-white text-base sm:text-xl font-bold shadow-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            💬 <span>WhatsApp</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
