import { Route, Routes } from "react-router-dom";
import Header from "./Components/HEader";
import LandingPage from "./Components/LandingPage";
import Favourite from "./Components/Favourite";
import Books from "./Components/Books";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Books" element={<Books  />} />
          <Route path="/Favroute" element={<Favourite />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
