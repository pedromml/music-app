import { useRef } from "react";
import "./ProfilePage.css";
import songs from "../data/songs/songs.json";

import user from "../data/users/user1.json";

const ProfilePage = () => {
  const horizontalScrollRef = useRef();
  const onWheel = (e) => {
    e.preventDefault();
    try {const elm = horizontalScrollRef.current;
    if (elm) {
      if (e.deltaY == 0) return;
      elm.scrollTo({
        left: elm.scrollLeft + e.deltaY/2,
      });
      e.preventDefault();
    }}
    catch {
      console.log("AAA")
    }
  };

  const age = Math.floor(
    (Date.now() - Date.parse(user.birthDate)) / (1000 * 60 * 60 * 24 * 365.25)
  );
  const songList = songs.songs.map((song) => {
    return (
      <div className="song-picture-container" key={song.name}>
        <img
          className="song-picture"
          src={require("../data/songs/album_covers/" + song.albumCover)}
        />
        <div className="song-picture-subtitle">{song.songName}</div>
      </div>
    );
  });

  return (
    <div className="content">
      <div className="content-container">
        <img
          className="profile-picture"
          src={require("../data/profile_photos/" + user.profile_picture)}
        />
        <div className="text-container">
          <p className="profile-data-tag">Name:</p>
          <input className="profile-text-data" value={user.fullName}/>

          <p className="profile-data-tag">Age:</p>
          <p className="profile-text-data">{age}</p>

          <p className="profile-data-tag">Born at:</p>
          <p className="profile-text-data">{user.birthDate}</p>
        </div>
      </div>
      <div className="content-container content-container-flex-grow">
        <div className="picture-list-container">
          <p className="list-title">Liked songs</p>
          <div className="picture-list-horizontal" ref={horizontalScrollRef} onWheel={onWheel}>{songList}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
