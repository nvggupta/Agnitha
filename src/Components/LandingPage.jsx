import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addData } from "../features/BookStoreSlice";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  const handleInput = (e) => {
    if (e.key !== "Enter") {
      setQuery(e.target.value);
    } else {
      setSearch(true);
    }
  };

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://openlibrary.org/search.json?title=${query}`
          );
          const data = await response.json();
          const {docs} = data;
          const payloadData = {
            QueryName : query,
            data : [...docs]
          }
          navigate("/Books");
          dispatch(addData(payloadData));
        } catch (error) {
          console.log("Error occurred", error);
        } finally {
          setSearch(false);
        }
      };

      fetchData();
    }
  }, [search]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-evenly items-center background">
        <div className="border-2 border-gray-600 w-1/2 flex items-center justify-between rounded-md bg-white">
          <input
            type="text"
            placeholder="Enter Book Name"
            className="w-full py-2 px-2 rounded-md outline-none font-semibold font-serif text-xl"
            onKeyUp={handleInput}
            defaultValue={query}
          />
          <FaSearch className="text-2xl ml-3 mr-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
