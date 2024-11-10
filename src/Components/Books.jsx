import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksCard from "./BooksCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TopRatedCarousel from "./TopRatedCarousel";
import { addCarauselData } from "../features/BookStoreSlice";

function Books() {
  const payloadData = useSelector((state) => state.booksStore[0]);
  const { query, data } = payloadData;
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const dispatch = useDispatch();
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };
  console.log(data);
  
  useEffect(()=>{
    console.log("data" , data);
    dispatch(addCarauselData(data));
  },[])

  return (
    <div className="flex flex-col items-start font-serif font-semibold text-slate-700 p-5 m-auto mt-10 w-[80%]">
    <p className="text-2xl">Top Rated Books</p>
          <TopRatedCarousel  />
      <p className="font-[500] ml-6 text-xl capitalize">{`Search Result For ${query}`}</p>
      <div className="w-full flex flex-wrap gap-5 mt-5">
        {currentItems.map((elem, ind) => (
          <BooksCard key={ind} elem={elem} fav={false} />
        ))}
      </div>
      <div className="w-full">
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