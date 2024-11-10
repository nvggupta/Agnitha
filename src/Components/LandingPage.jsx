import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addData } from "../features/BookStoreSlice";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);  // New loading state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.key !== "Enter") {
      setQuery(e.target.value);
    } else {
      setSearch(true);
    }
  };

  const handleSearchClick = () => {
    if (query.trim()) { // Ensure there is a query before setting search to true
      setSearch(true);
    }
  };

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        setLoading(true);  // Set loading to true when starting fetch
        try {
          const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
          const data = await response.json();
          const { docs } = data;
          const payloadData = {
            QueryName: query,
            data: [...docs],
          };
          navigate("/Books");
          dispatch(addData(payloadData));
        } catch (error) {
          console.log("Error occurred", error);
        } finally {
          setLoading(false);  // Reset loading state after fetch
          setSearch(false);
        }
      };

      fetchData();
    }
  }, [search, query, dispatch, navigate]);

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center background">
        <div className="border-2 border-gray-600 w-11/12 sm:w-2/3 lg:w-1/2 flex items-center justify-between rounded-md bg-white px-2">
          <input
            type="text"
            placeholder="Enter Book Name"
            className="w-full py-2 px-2 rounded-md outline-none font-semibold font-serif text-lg sm:text-xl"
            onKeyUp={handleInput}
            defaultValue={query}
          />
          <FaSearch className="text-xl sm:text-2xl ml-3 mr-2 cursor-pointer" onClick={handleSearchClick} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;