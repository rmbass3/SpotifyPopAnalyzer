import React, {useEffect} from "react";

function Login({token, setToken}){
  const CLIENT_ID = "d0d9e2af65404ec2a8020d0b1079068b"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [setToken])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

  return (
    <div>
      {!token ?
        <button className="btn btn-outline-success">
          <a className="login-link" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify
          </a>
        </button>
        : <button className="btn btn-outline-danger" onClick={logout}>
            Logout
          </button>
      }
    </div>
  )
}

export default Login