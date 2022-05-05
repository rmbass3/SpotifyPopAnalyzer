import React from "react";
import Login from "./LoginButton";

function Navbar({token, setToken, user, setUser}) {

  const getLoginName = () => {
    return ((token && user) ? 
    <li className="mt-1 mt-lg-0 me-0 me-lg-4 mb-2 mb-lg-0 d-flex align-items-center user-content">
      <span className="text-light mx-3 username">{user?.display_name}</span>
      <img className="rounded-circle user-pfp" src={user.images ? user.images[0].url : null} alt="user-pfp"/>
    </li> 
    : 
    <li className="d-flex align-items-center">
      <span className="user-login-title text-light me-0 me-lg-4 mb-2 mb-lg-0">
        Login to continue.
      </span>
    </li>)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#navbar">Pop Analyzer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {getLoginName()}
            <li className="nav-item">
              <Login token={token} setToken={setToken} setUser={setUser}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar