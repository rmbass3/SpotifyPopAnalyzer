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
  const [percent, setPercent] = useState(-1)
  const [mostPop, setMostPop] = useState([])
  const [leastPop, setLeastPop] = useState([])
  const [plotData, setPlotData] = useState([])

  // User
  useEffect(() => {
    const getUser = async (e) => {
      if (token){
        const {data} = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .catch(e => {
          console.log("stale", e)
          setToken("")
          setUser([])
          window.localStorage.removeItem("token")
        })
        console.log(data)
        setUser(data)
      }
    }

    getUser()

  }, [token, setUser, setToken])

  // Favorite Track
  useEffect(() => {
    const getFavoriteT = async (e) => {
      if (token) {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
              limit: 50,
              time_range: "short_term"
            }
        })
        .catch(e => {
          console.log("stale", e)
          setToken("")
          setUser([])
          window.localStorage.removeItem("token")
        })
        console.log(data)
        setFavoriteT(data)
      }
    }

    getFavoriteT()

  }, [token, setFavoriteT, setToken])


  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken} user={user} setUser={setUser}/>
      <User token={token} setToken={setToken} user={user} setUser={setUser}/>
      <Progress percent={percent} setPercent={setPercent} user={user} token={token} favoriteT={favoriteT} mostPop={mostPop} setMostPop={setMostPop} leastPop={leastPop} setLeastPop={setLeastPop} plotData={plotData} setPlotData={setPlotData}/>
      <FavoriteT token={token} user={user} favoriteT={favoriteT}/>
    </div>
  )
}

export default Home