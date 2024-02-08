import { useEffect, useReducer, useRef, useState } from "react";
import "./ProfilePage.css";
import songs from "../data/songs/songs.json";

import user from "../data/users/user1.json";
import SongPictureContainer from "./SongPictureContainer";
import PictureList from "./PictureList";

function calculateAge(birthDate) {
  return Math.floor(
    (Date.now() - Date.parse(birthDate)) / (1000 * 60 * 60 * 24 * 365.25)
  );
}

const userDataReducer = (userData, action) => {
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



  function handleAddSongToLiked(isLiked, song) {
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
          <PictureList title={"Liked songs"} songList={likedSongsList}/>
        )}
        {notLikedSongsList.length > 0 && (
          <PictureList title={likedSongsList.length > 0 ? "Other songs" : "All songs"} songList={notLikedSongsList}/>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
