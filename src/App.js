import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
        </Routes>
        <Routes>
          <Route exact path="/player/:id" element={<Player />} />
        </Routes>
        <Routes>
          <Route exact path="/search/:search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
