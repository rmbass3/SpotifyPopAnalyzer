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
      <h1 className="user-login-title text-center text-light mt-5">
        <b>{user.display_name}'s</b> Top 10
      </h1>
    </div> 
    : 
    <div>
      <h3 className="user-login-title text-center text-light">
        Log in to continue.
      </h3>
    </div>)
  }

  return(
    <div>
      {getLoginName()}
    </div>
  )
}

export default User