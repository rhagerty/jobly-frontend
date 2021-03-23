import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Account/UserContext";
import "./Home.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Home() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>

      {currentUser ? (
        <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
      ) : (
        <p>
          <Link className="loginBtn" to="/login">
            Login
          </Link>
          <Link className="signupBtn" to="/signup">
            Signup
          </Link>
        </p>
      )}
    </div>
  );
}

export default Home;
