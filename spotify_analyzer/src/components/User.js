import React, {useEffect} from "react";
import axios from "axios";

function User({token, user, setUser}){

  useEffect(() => {
    const getUser = async (e) => {
      const {data} = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
              Authorization: `Bearer ${token}`
          },
      })
      console.log(data)
      setUser(data)
    }

    if (token){
      getUser()
    }
  }, [token, setUser])

  const getLoginName = () => {
    return (token ? 
    <div>
      <h2 className="user-login-title text-center text-light">
        Logged in as: <b>{user.display_name}</b>
      </h2>
    </div> 
    : 
    <div>
      <h2 className="user-login-title text-center text-light">
        Please log in.
      </h2>
    </div>)
  }

  return(
    <div>
      {getLoginName()}
    </div>
  )
}

export default User