import React, {useEffect} from "react";

function LoginButton({token, setToken, setUser}){
  const CLIENT_ID = "d0d9e2af65404ec2a8020d0b1079068b"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "user-top-read"

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
      setUser([])
      window.localStorage.removeItem("token")
  }
  
  return (
    <div>
      {!token ?
        <button className="btn btn-secondary mt-0 mt-lg-1">
          <a className="login-link" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify
          </a>
        </button>
        : <button className="btn btn-secondary mt-0 mt-lg-1" onClick={logout}>
            Logout
          </button>
      }
    </div>
  )
}

export default LoginButton