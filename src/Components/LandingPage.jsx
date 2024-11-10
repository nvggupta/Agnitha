import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addData } from "../features/BookStoreSlice";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [query, setQuery] = useState(""); // State to store the search query
  const [search, setSearch] = useState(false); // State to trigger the search effect
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes and initiate search on Enter key
  const handleInput = (e) => {
    if (e.key !== "Enter") {
      setQuery(e.target.value);
    } else {
      setSearch(true);
    }
  };

  // Fetch data from API and dispatch it to Redux store
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
          const data = await response.json();
          const { docs } = data;

          // Create payload with query name and results
          const payloadData = {
            QueryName: query,
            data: [...docs],
          };
          
          // Navigate to the Books page and dispatch data
          navigate("/Books");
          dispatch(addData(payloadData));
        } catch (error) {
          console.log("Error occurred", error);
        } finally {
          setSearch(false); // Reset search state after completion
        }
      };

      fetchData();
    }
  }, [search, query, dispatch, navigate]);

  return (
    <div>
      {/* Full screen height container with flex layout for centering elements */}
      <div className="h-screen flex flex-col justify-center items-center background">
        
        {/* Search input field container with responsive width and rounded borders */}
        <div className="border-2 border-gray-600 w-11/12 sm:w-2/3 lg:w-1/2 flex items-center justify-between rounded-md bg-white px-2">
          <input
            type="text"
            placeholder="Enter Book Name"
            className="w-full py-2 px-2 rounded-md outline-none font-semibold font-serif text-lg sm:text-xl"
            onKeyUp={handleInput}
            defaultValue={query}
          />
          
          {/* Search icon for user interaction */}
          <FaSearch className="text-xl sm:text-2xl ml-3 mr-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
