import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Star from "react-stars";
import { addToFavourite, removeFromFavorite } from "../features/BookStoreSlice";

function BooksCard({ elem, fav }) {
  // `favoriteData` retrieves the list of favorite books from Redux store
  const favoriteData = useSelector((state) => state.booksStore[1]);
  const [addFav, setAddFav] = useState(false); // Local state to manage favorite button status
  const dispatch = useDispatch();

  // Function to handle adding/removing book from favorites
  const addToFav = () => {
    if (!addFav) {
      setAddFav(true);
      dispatch(addToFavourite(elem));
    } else {
      setAddFav(false);
      dispatch(removeFromFavorite(elem.key));
    }
  };

  // Set the initial state for `addFav` based on whether the book is already in favorites
  useEffect(() => {
    const findElem = favoriteData.find((item) => item.key === elem.key);
    if (findElem) setAddFav(true);
  }, [favoriteData, elem.key]);

  return (
    <div className="w-full max-w-xs sm:w-72 m-4 flex flex-col justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Display book cover image with hover effect */}
      <img
        src={`https://covers.openlibrary.org/b/id/${elem?.cover_i}-M.jpg`}
        alt="Book Cover"
        className="w-full h-64 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-200 mb-4"
      />

      <div className="text-center">
        {/* Book title with hover color change */}
        <h2 className="font-semibold text-xl text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
          {elem?.title}
        </h2>
        
        {/* Author's name displayed below the title */}
        <p className="text-gray-600 text-sm italic">{elem?.author_name}</p>

        {/* Star rating component to display average rating */}
        <Star value={elem?.ratings_average} half={true} edit={false} count={5} />

        {/* Action buttons for 'Add to Favourite' and 'Read More' */}
        <div className="flex flex-col justify-center items-center mt-2 gap-2">
          {/* Favorite button toggles add/remove action */}
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200"
            onClick={addToFav}
          >
            {!addFav && !fav ? "Add To Favourite" : "Remove From Favourite"}
          </button>
          
          {/* 'Read More' button opens book link in a new tab */}
          <button
            className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md transition-colors duration-200"
            onClick={() => window.open(`https://openlibrary.org${elem.key}`, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
