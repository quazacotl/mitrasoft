import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GalleryPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/:id" element={<DetailsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
