import "./ProfilePage.css";

import user from "../data/users/user1.json";

const ProfilePage = () => {
  const age = Math.floor(
    (Date.now() - Date.parse(user.birthDate)) / (1000 * 60 * 60 * 24 * 365.25)
  );
  return (
    <div className="content">
      <div className="content-container">
        <img
          className="profile-picture"
          src={require("../data/profile_photos/" + user.profile_picture)}
        />
        <div className="text-container">
          <p className="profile-data-tag">Name:</p>
          <p className="profile-text-data">{user.fullName}</p>

          <p className="profile-data-tag">Age:</p>
          <p className="profile-text-data">{age}</p>

          <p className="profile-data-tag">Born at:</p>
          <p className="profile-text-data">{user.birthDate}</p>
        </div>
      </div>
      <div className="content-container content-container-flex-grow">
        <div className="text-container">
          <p className="list-title">Liked songs</p>
          <div className="picture-list-horizontal">
            <div className="song-picture-container">
              <img
                className="song-picture"
                src={require("../data/profile_photos/" + user.profile_picture)}
              />
              <div className="song-picture-subtitle">Nome da música</div>
            </div>
            <div className="song-picture-container">
              <img
                className="song-picture"
                src={require("../data/profile_photos/" + user.profile_picture)}
              />
              <div className="song-picture-subtitle">Nome da música</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
