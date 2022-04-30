import React, {useState, useEffect} from "react";
import Login from "./Login";

function Navbar({token, setToken, user}) {


  const [pfp, setPfp] = useState("")

  useEffect(() => {
    const getPfp = () => {
      if (user.images != null) {
        setPfp(user.images[0].url)
      }
    }
    getPfp()
  }, [user])

  const getLoginName = () => {
    return ((token && user) ? 
    <li className="mt-1 mt-lg-0 me-0 me-lg-4 mb-2 mb-lg-0">
      <img className="rounded-circle user-pfp" src={pfp} alt="user-pfp"/>
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