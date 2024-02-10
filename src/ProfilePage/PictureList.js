import { useRef, useState } from "react";
import SongPictureContainer from "./SongPictureContainer";

const PictureList = ({ title, songList, liked, handleAddSongToLiked }) => {
  const [searchedString, setSearchedString] = useState("");
  const handleUpdateSearchedString = (e) => {
    setSearchedString(e.target.value);
  };

  const horizontalScrollRef = useRef();
  const onWheel = (e) => {
    const elm = horizontalScrollRef.current;
    if (elm) {
      if (e.deltaY === 0) return;
      elm.scrollTo({
        left: elm.scrollLeft + e.deltaY / 2,
      });
    }
  };

  const searchedSongList = songList.filter((song) => {
    if (searchedString === "") return true;
    return song.songName
      .replace(/ /g, "")
      .toUpperCase()
      .includes(searchedString.replace(/ /g, "").toUpperCase());
  });

  return (
    <div className="picture-list-container">
      <p className="list-title">
        {title}{" "}
        <input
          placeholder={"Search"}
          value={searchedString}
          onChange={(e) => {
            handleUpdateSearchedString(e);
          }}
        />
      </p>

      <div
        className="picture-list-horizontal"
        ref={horizontalScrollRef}
        onWheel={onWheel}
      >
        {searchedSongList.map((song) => {
          return (
            <SongPictureContainer
              key={song.songName}
              song={song}
              liked={liked}
              handleAddSongToLiked={handleAddSongToLiked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PictureList;
