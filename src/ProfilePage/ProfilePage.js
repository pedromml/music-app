import { useEffect, useReducer, useRef, useState } from "react";
import "./ProfilePage.css";
import songs from "../data/songs/songs.json";

import user from "../data/users/user1.json";
import SongPictureContainer from "./SongPictureContainer";

function calculateAge(birthDate) {
  return Math.floor(
    (Date.now() - Date.parse(birthDate)) / (1000 * 60 * 60 * 24 * 365.25)
  );
}

const userDataReducer = (userData, action) => {
  console.log(action);
  switch (action.type) {
    case "updateUserName": {
      return { ...userData, fullName: action.name };
    }
    case "updateUserBirthDate": {
      return {
        ...userData,
        birthDate: action.birthDate,
        age: calculateAge(action.birthDate),
      };
    }
    case "addLikedSong": {
      if (!userData.likedSongs.includes(action.song)) {
        userData.likedSongs.push(action.song);
      }
      return {
        ...userData,
      };
    }
    case "removeLikedSong": {
      return {
        ...userData,
        likedSongs: userData.likedSongs.filter((s) => {
          return action.song !== s;
        }),
      };
    }
    default: {
      console.log("Unknown action");
      console.log(action);
    }
  }
};

const ProfilePage = () => {
  user.age = calculateAge(user.birthDate);
  const [userData, dispatch] = useReducer(userDataReducer, user);
  console.log(userData);

  function handleUpdateUserName(e) {
    dispatch({
      type: "updateUserName",
      name: e.target.value,
    });
  }

  function handleUpdateUserBirthDate(e) {
    dispatch({
      type: "updateUserBirthDate",
      birthDate: e.target.value,
    });
  }

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

  function handleAddSongToLiked(isLiked, song) {
    console.log("isLiked" + isLiked);
    if (isLiked) {
      dispatch({
        type: "addLikedSong",
        song: song,
      });
    } else {
      dispatch({
        type: "removeLikedSong",
        song: song,
      });
    }
  }

  const songList = songs.songs.map((song) => {
    return (
      <SongPictureContainer
        song={song}
        handleAddSongToLiked={handleAddSongToLiked}
      />
    );
  });
  let likedSongsList = userData.likedSongs.map((song) => {
    return (
      <SongPictureContainer
        key={song.songName}
        song={song}
        liked={true}
        handleAddSongToLiked={handleAddSongToLiked}
      />
    );
  });

  let notLikedSongsList = songs.songs
    .filter((s) => {
      return !userData.likedSongs.includes(s);
    })

    .map((song) => {
      return (
        <SongPictureContainer
          key={song.songName}
          song={song}
          liked={false}
          handleAddSongToLiked={handleAddSongToLiked}
        />
      );
    });

  console.log("liked songs");
  console.log(userData.likedSongs);

  return (
    <div className="content">
      <div className="content-container">
        <img
          className="profile-picture"
          src={require("../data/profile_photos/" + user.profile_picture)}
        />
        <div className="text-container">
          <p className="profile-data-tag">User name:</p>
          <input
            className="profile-text-data"
            value={userData.fullName}
            onChange={(e) => handleUpdateUserName(e)}
          />

          <p className="profile-data-tag">Age:</p>
          <p className="profile-text-data">{userData.age}</p>

          <p className="profile-data-tag">Born at:</p>
          <input
            className="profile-text-data"
            type="date"
            value={userData.birthDate}
            onChange={(e) => handleUpdateUserBirthDate(e)}
          />
        </div>
      </div>
      <div className="content-container content-container-flex-grow">
        {likedSongsList.length > 0 && (
          <div className="picture-list-container">
            <p className="list-title">Liked songs</p>
            <div
              className="picture-list-horizontal"
              ref={horizontalScrollRef}
              onWheel={onWheel}
            >
              {likedSongsList}
            </div>
          </div>
        )}
        {notLikedSongsList.length > 0 && (
          <div className="picture-list-container">
            <p className="list-title">Other songs</p>
            <div
              className="picture-list-horizontal"
              ref={horizontalScrollRef}
              onWheel={onWheel}
            >
              {notLikedSongsList}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
