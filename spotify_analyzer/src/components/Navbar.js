import React from "react";
import Login from "./Login";

function Navbar({token, setToken, user}) {

  const getLoginName = () => {
    return (token ? 
    <li className="mt-0 mt-lg-1">
      <p className="user-login-title text-light mt-0 mt-lg-2 me-0 me-lg-4">
        Logged in as: <b>{user.display_name}</b>
      </p>
    </li> 
    : 
    <li>
      <p className="user-login-title text-light mt-0 mt-lg-2 me-0 me-lg-4">
        Please log in.
      </p>
    </li>)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#navbar">Spotify Analyzer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {getLoginName()}
            <li className="nav-item">
              <Login token={token} setToken={setToken}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar