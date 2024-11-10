// Importing icons and routing components
import { FaHeart, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Header bar with fixed position at the top of the screen */}
      <div className="fixed w-full z-10 top-0 flex justify-between px-5 sm:px-10 items-center h-16 bg-black">
        
        {/* Logo icon linking to the home page */}
        <div>
          <Link to={'/'}>
            <FaBook className="text-3xl cursor-pointer text-white" />
          </Link>
        </div>

        {/* Link to the Favourite page with label and heart icon */}
        <Link to={'/Favourite'}>
          <div className="flex gap-3 sm:gap-6 items-center font-serif font-bold text-white">
            <label className="text-lg sm:text-xl cursor-pointer">Favourite</label>
            <FaHeart className="text-2xl sm:text-3xl cursor-pointer" />
          </div>
        </Link>
      </div>

      {/* Spacer div to prevent content overlap with fixed header */}
      <div className="h-16"></div>
    </>
  );
}

export default Header;
