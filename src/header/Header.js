import "./Header.css"


const Header = () => {
  return (
    <header className="App-header">
      <a href="/" className="header-picture">
        <img src={"icons/music-note.svg"}  alt="logo" />
      </a>
      <div className="nav-item">
        <a href="/">Profile</a>
      </div>
    </header>
  );
};

export default Header;
