import "./Header.css"

import user from "../data/users/user1.json"
const Header = () => {
  return (
    <header className="App-header">
      <a href="/" className="header-profile-picture">
        <img src={require("../data/profile_photos/" + user.profile_picture)}  alt="logo" />
      </a>
      <div className="nav-item">
        <a href="/profile">Profile</a>
      </div>
      <div className="nav-item">
        <a href="/gallery">Photo gallery</a>
      </div>
      <div className="nav-item">
        <a href="/page3">Page 3</a>
      </div>
    </header>
  );
};

export default Header;
