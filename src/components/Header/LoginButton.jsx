import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const LoginButton = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div>
      {email ? (
        <Link to="/auth">
          <button className="sign-btn" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      ) : null}

      {email ? null : (
        <Link to="/auth">
          <button className="sign-btn">Login</button>
        </Link>
      )}

      {email === "akjol2001@gmail.com" ? (
        <Link
          className={
            location.pathname === "/admin"
              ? "navbar__item-active"
              : "navbar__item"
          }
          to="/admin"
        >
          ADMIN
        </Link>
      ) : null}
      
    </div>
  );
};

export default LoginButton;
