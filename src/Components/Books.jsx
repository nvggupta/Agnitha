import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TopRatedCarousel from "./TopRatedCarousel";
import { addCarauselData } from "../features/BookStoreSlice";

function Books() {
  // Fetching data from Redux store. `payloadData` contains `query` and `data` properties.
  const payloadData = useSelector((state) => state.booksStore[0]);
  const { query, data } = payloadData;
  
  // State for handling the current page in pagination
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page

  // Calculate total pages for pagination based on the number of items
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const dispatch = useDispatch();

  // Calculate the index range for items to display on the current page
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  // Handler for changing the page in pagination
  const handlePageChange = (event, value) => {
    setPageNo(value);
  };
  
  // Load data into the carousel on component mount
  useEffect(() => {
    dispatch(addCarauselData(data));
  }, [data, dispatch]);

  return (
    <div className="flex flex-col items-start font-serif font-semibold text-slate-700 p-5 m-auto mt-10 w-full max-w-[80%] sm:w-[90%]">
      {/* Carousel for displaying top-rated books */}
      <p className="text-2xl">Top Rated Books</p>
      <TopRatedCarousel />
      
      {/* Display search query results */}
      <p className="font-[500] ml-6 text-xl capitalize">{`Search Result For ${query}`}</p>
      
      {/* Container for book cards, responsive layout with gap for spacing */}
      <div className="w-full flex flex-wrap gap-5 mt-5 justify-center sm:justify-start">
        {currentItems.map((elem, ind) => (
          <BooksCard key={ind} elem={elem} fav={false} />
        ))}
      </div>

      {/* Pagination component wrapped in a Stack for spacing, centered on the page */}
      <div className="w-full flex justify-center mt-10">
        <Stack spacing={9}>
          <Pagination
            count={totalPages}
            page={pageNo}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default Books;
