"use client";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="text-3xl font-bold font-serif">
        <Link href="/" className="hover:text-gray-400 transition duration-200 title-font text-2xl leading-tight">
          My Project's Blog
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link href="https://www.linkedin.com/in/fatima-nazeer-493a83278/" target="_blank" className="hover:text-blue-500 transition duration-200">
          <FaLinkedin size={22} />
        </Link>
        <Link href="https://github.com/FatimaNazeer777" target="_blank" className="hover:text-gray-300 transition duration-200">
          <FaGithub size={22} />
        </Link>
        <Link href="https://www.instagram.com/fatimayy__here" target="_blank" className="hover:text-pink-500 transition duration-200">
          <FaInstagram size={22} />
        </Link>
        <Link href="https://www.facebook.com/fatimanazeer78?mibextid=ZbWKwL" target="_blank" className="hover:text-blue-600 transition duration-200">
          <FaFacebook size={22} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
