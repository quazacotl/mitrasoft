import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/:id" element={<GalleryItem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
