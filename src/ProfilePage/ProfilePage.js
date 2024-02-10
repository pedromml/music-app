import { useReducer } from "react";
import "./ProfilePage.css";
import songs from "../data/songs/songs.json";

import user from "../data/users/user1.json";
import PictureList from "./PictureList";
import ProfileCard from "./ProfileCard";

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

  const notLikedSongsList = songs.songs.filter((s) => {
    return !userData.likedSongs.includes(s);
  });

  return (
    <div className="content">
      <ProfileCard
        user={user}
        userData={userData}
        handleUpdateUserBirthDate={handleUpdateUserBirthDate}
        handleUpdateUserName={handleUpdateUserName}
      />
      <div className="content-container content-container-flex-grow">
        {userData.likedSongs.length > 0 && (
          <PictureList
            title={"Liked songs"}
            songList={userData.likedSongs}
            liked={true}
            handleAddSongToLiked={handleAddSongToLiked}
          />
        )}
        {notLikedSongsList.length > 0 && (
          <PictureList
            title={userData.likedSongs.length > 0 ? "Other songs" : "All songs"}
            songList={notLikedSongsList}
            liked={false}
            handleAddSongToLiked={handleAddSongToLiked}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
