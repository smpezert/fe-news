import { useContext } from "react";
import { User } from "../contexts/User";

function Profile() {
  const { user } = useContext(User);

  return (
    <div className="profile">
      <h4 className="profile-name">{user.username}</h4>
      <img src={user.avatar_url} alt="user avatar" className="profile-photo" />
    </div>
  );
}

export default Profile;
