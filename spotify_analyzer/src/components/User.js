import React, {useEffect} from "react";
import axios from "axios";

function User({token, setToken, user, setUser}){

  useEffect(() => {
    const getUser = async () => {
      const resp = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
              Authorization: `Bearer ${token}`
          },
      })
      return resp
    }
    
    getUser()
    .then(data => {
      setUser(data)
      console.log(data)
    })
    .catch(error => {
      if (error.response.status === 401){
        console.log("Expired token at User")
        setToken(null)
        setUser(null)
      }
    })

  }, [token, setUser, setToken])

  const getLoginName = () => {
    return (user ?
    <div>
      <h1 className="user-login-title text-center text-light mt-5">
        <b>{user.data?.display_name}'s</b> Top 10
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