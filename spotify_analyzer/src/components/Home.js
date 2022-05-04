import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import User from "./User";
import FavoriteT from "./FavoriteT";
import Progress from "./Progress";


function Home() {

  const [token, setToken] = useState("")
  const [user, setUser] = useState([])
  const [favoriteT, setFavoriteT] = useState([])
  const [percent, setPercent] = useState(90)

  // User
  useEffect(() => {
    const getUser = () => {
      axios.get("https://api.spotify.com/v1/me", {
          headers: {
              Authorization: `Bearer ${token}`
          },
      }).then(data => {
        console.log("User data:", data)
        setUser(data)
      }).catch(error => {
        console.log("getUser request failed")

      })
      
    }
    if (token){
      getUser()
    }
  }, [token, setUser, setToken])

  // Favorite Track
  useEffect(() => {
    const getFavoriteT = async (e) => {
      const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
            limit: 10,
            time_range: "short_term"
          }
      })
      console.log(data)
      setFavoriteT(data)
    }

    if (token){
      getFavoriteT()
    }
  }, [token, setFavoriteT])


  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken} user={user} setUser={setUser}/>
      <User token={token} setToken={setToken} user={user} setUser={setUser}/>
      <Progress percent={percent} setPercent={setPercent} user={user} token={token} favoriteT={favoriteT}/>
      <FavoriteT token={token} user={user} favoriteT={favoriteT}/>
    </div>
  )
}

export default Home