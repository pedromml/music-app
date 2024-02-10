const ProfileCard = ({
    user,
    userData,
    handleUpdateUserName,
    handleUpdateUserBirthDate
}) => {
    return (
        <div className="content-container">
        <img
          className="profile-picture"
          src={require("../data/profile_photos/" + user.profile_picture)}
          alt="User profile"
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
    )
}

export default ProfileCard;