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
  const [mostPop, setMostPop] = useState([])
  const [leastPop, setLeastPop] = useState([])

  // User
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
      console.log("token", token)
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
            limit: 50,
            time_range: "long_term"
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
      <Progress percent={percent} setPercent={setPercent} user={user} token={token} favoriteT={favoriteT} mostPop={mostPop} setMostPop={setMostPop} leastPop={leastPop} setLeastPop={setLeastPop}/>
      <FavoriteT token={token} user={user} favoriteT={favoriteT}/>
    </div>
  )
}

export default Home