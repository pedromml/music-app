import { useEffect, useState } from "react";

const SongPictureContainer = ({ song, handleAddSongToLiked, liked }) => {

    function handleLikeSong(e) {
        e.preventDefault();
        handleAddSongToLiked(!heartFilled, song)
        setHeartFilled(!heartFilled);
    }
    const [heartFilled, setHeartFilled] = useState(liked);
  return (
    <div className="song-picture-container" key={song.name} onClick={e => handleLikeSong(e)}>
      <img
        className="song-picture"
        src={require("../data/songs/album_covers/" + song.albumCover)}
      />
      <div className="song-picture-subtitle">{song.songName}</div>
      <img className="song-picture-heart" src={heartFilled ? "icons/heart-filled.svg" : "icons/heart-empty.svg"}></img>
    </div>
  );
};

export default SongPictureContainer;
