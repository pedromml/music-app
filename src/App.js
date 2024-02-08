import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header.js";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
