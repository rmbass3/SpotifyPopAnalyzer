import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import axios from "axios"
function Home(props) {

  const [token, setToken] = useState("")
  const [user, setUser] = useState([])

  const getUser = async (e) => {
    // e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(data)
    console.log(data)
    setUser(data)
    // setArtists(data.artists.items)
  }

  useEffect(() => {
    if (token){
      getUser()
    }
  }, [token])


  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken}/>
      <h1 className="home-title text-center mt-5">Spotify Analyzer</h1>
    </div>
  )
}

export default Home