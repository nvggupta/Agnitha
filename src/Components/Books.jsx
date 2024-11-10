import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TopRatedCarousel from "./TopRatedCarousel";
import { addCarauselData } from "../features/BookStoreSlice";
import { Oval } from "react-loader-spinner"; // Import the loader component

function Books() {
  const payloadData = useSelector((state) => state.booksStore[0]);
  const { query, data } = payloadData;
  const [loading, setLoading] = useState(true); // Loading state
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCarauselData(data));
    setLoading(false); // Set loading to false once data is loaded
  }, [data, dispatch]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-start font-serif font-semibold text-slate-700 p-5 m-auto mt-10 w-full max-w-[80%] sm:w-[90%]">
      <p className="text-2xl">Top Rated Books</p>
      <TopRatedCarousel />

      <p className="font-[500] ml-6 text-xl capitalize">{`Search Result For ${query}`}</p>

      {/* Show loader while loading data */}
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Oval height={80} width={80} color="#4fa94d" ariaLabel="loading" />
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-5 mt-5 justify-center sm:justify-start">
          {currentItems.map((elem, ind) => (
            <BooksCard key={ind} elem={elem} fav={false} />
          ))}
        </div>
      )}

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
