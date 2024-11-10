// import BookLogo from "../../public/360_F_777575376_Z14u1CGxwn2WSw2NgiE2Nd1gutZQtkm6.jpg";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

function Header() {
  return (
    <>

    <div className="fixed w-full z-10 top-0 flex justify-between px-10 items-center h-16 bg-black z-100">
      <div>
      <Link to={'/'}>
       <FaBook  className="text-3xl cursor-pointer text-white" />  
      </Link>
        
      </div>
      <Link to={'/Favourite'}>
      <div className="flex gap-6 items-center font-serif font-bold ">
        <label className="text-xl cursor-pointer text-white">Favourite</label>
        <FaHeart className="text-3xl cursor-pointer text-white" />
      </div>
      </Link>
    </div>
      <div className="h-[60px] border-black border"></div>
    </>
  );
}

export default Header;