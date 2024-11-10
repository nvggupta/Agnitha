import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Favourite from "./Components/Favourite";
import Books from "./Components/Books";
import { useSelector } from "react-redux";

function App() {
  const payloadData = useSelector((state) => state.booksStore[0]);
  const { query } = payloadData;

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Books"
            element={query ? <Books /> : <Navigate to="/" replace />}
          />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
