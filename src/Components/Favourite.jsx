
import { useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import { Link } from "react-router-dom";

function Favourite() {
  // Get the favorite books data from Redux store
  const favoriteData = useSelector((state) => state.booksStore[1]);

  console.log("favData", favoriteData);

  return (
    <div>
      {/* Link to navigate back to the Books page */}
      <Link to={"/Books"}>
        <div className="fixed z-20 text-center text-3xl left-5 font-bold text-purple-500 p-3 rounded-lg w-fit mt-5 m-auto border shadow-lg hover:bg-purple-100 transition-colors duration-200">
          Back
        </div>
      </Link>

      {/* Container for displaying favorite books in a responsive grid layout */}
      <div className="flex flex-wrap items-center justify-center mt-16 gap-4 px-4">
        {favoriteData.map((item, index) => (
          <BooksCard key={index} elem={item} fav={true} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
