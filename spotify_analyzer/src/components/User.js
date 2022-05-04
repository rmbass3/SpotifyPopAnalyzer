import React from "react";

function User({token, setToken, user, setUser}){


  const getLoginName = () => {
    return ((user && token) ?
    <div>
      <h1 className="user-login-title text-center text-light mt-5">
        Music Popularity Score
      </h1>
      <h2 className="user-login-title text-center text-light mt-2">
        {user.data?.display_name}
      </h2>
      
    </div> 
    : 
    <div>
      <h1 className="user-login-title text-center text-light mt-5">
        Log in to continue.
      </h1>
    </div>)
  }

  return(
    <div>
      {getLoginName()}
    </div>
  )
}

export default User