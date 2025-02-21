import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className="bg-violet-800 p-4">
    //   <ul className="flex justify-center space-x-6">
    //     <li>
    //       <Link
    //         to="/"
    //         className="text-white font-semibold hover:text-blue-400 transition-colors"
    //       >
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="/feedback"
    //         className="text-white font-semibold hover:text-blue-400 transition-colors"
    //       >
    //         Feedback
    //       </Link>
    //     </li>
    //     {/* <li>
    //       <Link
    //         to="/about"
    //         className="text-white font-semibold hover:text-blue-400 transition-colors"
    //       >
    //         About
    //       </Link>
    //     </li> */}
    //     <li>
    //       <Link
    //         to="/questionall"
    //         className="text-white font-semibold hover:text-blue-400 transition-colors"
    //       >
    //         Questions
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="bg-gradient-to-r from-violet-800 via-indigo-800 to-purple-800 p-4 rounded-full shadow-lg mx-8 mt-3">
  <ul className="flex justify-center space-x-8">
    <li>
      <Link
        to="/"
        className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/feedback"
        className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        Feedback
      </Link>
    </li>
    {/* <li>
      <Link
        to="/about"
        className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        About
      </Link>
    </li> */}
    <li>
      <Link
        to="/questionall"
        className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        Questions
      </Link>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;
