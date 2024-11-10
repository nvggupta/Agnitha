import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Star from "react-stars";
import { addToFavourite, removeFromFavorite,addCarauselData } from "../features/BookStoreSlice";
function BooksCard({ elem , fav }) {
  const favoriteData = useSelector((state) => state.booksStore[1]);
  const [addFav, setAddFav] = useState(false);
  const addToFav = () => {
    if (!addFav) {
      setAddFav(true);
      dispatch(addToFavourite(elem));
    }
    else{
      setAddFav(false);
      dispatch(removeFromFavorite(elem.key))
    }
  };
  useEffect(() => {
    const findElem = favoriteData.find((item) => item.key === elem.key);
    if (findElem) setAddFav(true);
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="w-72 m-4 flex flex-col justify-between cursor-pointer items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <img
        src={`https://covers.openlibrary.org/b/id/${elem?.cover_i}-M.jpg`}
        alt="Book Cover"
        className="w-full h-64 object-contains rounded-md shadow-md hover:scale-105 transition-transform duration-200 mb-4"
      />
      <div className="text-center">
        <h2 className="font-[500] text-xl text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
          {elem?.title}
        </h2>
        <p className="text-gray-600 text-sm italic">{elem?.author_name}</p>
        <Star
          value={elem?.ratings_average}
          half={true}
          edit={false}
          count={5}
        />
        <div className="flex flex-col justify-center items-center mt-2 gap-2">
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200"
            onClick={addToFav}
          >
            {!addFav && !fav ? "Add To Favourite" : "Revome From Favourite"}
          </button>
          <button
            className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md transition-colors duration-200"
            onClick={() =>
              window.open(`https://openlibrary.org${elem.key}`, "_blank")
            }
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
