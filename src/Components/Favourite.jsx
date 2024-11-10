import React from "react";
import { useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import { Link } from "react-router-dom";
function Favourite() {
  const favoriteData = useSelector((state) => state.booksStore[1]);
  console.log("favData", favoriteData);
  return (
    <div>
      <Link to={"/Books"}>
        <div className="fixed z-20 text-center text-3xl left-5 font-bold text-purple-500 p-5 rounded-lg w-fit mt-5 m-auto border shadow-lg "> Back</div>
      </Link>
      <div className="flex flex-wrap items-center justify-center">
        {favoriteData.map((item, index) => (
          <BooksCard elem={item} fav={true} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
