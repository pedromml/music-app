import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1.js";
import Header from "./header/Header.js";
import Gallery from "./gallery/Gallery.js";
import Index from "./index/Index.js";
import MusicApp from "./MusicApp/MusicApp.js";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/musicapp" element={<MusicApp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
