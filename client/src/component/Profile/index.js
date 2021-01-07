import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutBtn";
import "../Nav/nav.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className="navbar nav-prof">
        <img className="prof-img" referrerPolicy="no-referrer" src={user.picture} alt={user.name} />
        <h2 className="prof-nm" >{user.name}</h2>
        <div className="logoutBtn">
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;