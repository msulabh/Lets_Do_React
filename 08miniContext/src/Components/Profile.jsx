import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  console.log(!user.name);
  if (!user.name) {
    return <div>Please Login First </div>;
  }
  return <div>Welcome {user.name}</div>;
}

export default Profile;
