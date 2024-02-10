import { useState } from "react";

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
        alt={song.album}
      />
      <div className="song-picture-subtitle">{song.songName}<span className={"song-picture-artist"}><br/>By {song.songArtist} </span></div>
      <img className="song-picture-heart" src={heartFilled ? process.env.PUBLIC_URL + "/icons/heart-filled.svg" : process.env.PUBLIC_URL + "/icons/heart-empty.svg"}  alt="Like" ></img>
    </div>
  );
};

export default SongPictureContainer;
