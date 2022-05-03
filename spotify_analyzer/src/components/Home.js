import React, {useState} from "react";
import Navbar from "./Navbar";
import User from "./User";
import FavoriteT from "./FavoriteT";
// import axios from "axios"
function Home(props) {

  const [token, setToken] = useState("")
  const [user, setUser] = useState([])
  const [favoriteT, setFavoriteT] = useState([])

  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken} user={user}/>
      <User token={token} setToken={setToken} user={user} setUser={setUser}/>
      <FavoriteT token={token} favoriteT={favoriteT} setFavoriteT={setFavoriteT}/>
    </div>
  )
}

export default Home