import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import axios from "axios"

function Home(props) {

  const [token, setToken] = useState("")
  const [user, setUser] = useState()
  // const [searchKey, setSearchKey] = useState("")
  // const [artists, setArtists] = useState([])

  const getUser = () => {
    const data = axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,

        }
    }).then(response => {
      setUser(response)
    })
    .catch(error => {
      console.log(error)
    })
    console.log(user)
  }

  useEffect(() => {
    getUser()
  }, [setToken]) 


  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken}/>
      <h1 className="home-title text-center mt-5 text-light">Spotify Analyzer</h1>
      {user ? <div>Logged in</div> : <div>Not logged in</div>}
    {/*
      <form onSubmit={searchArtists}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type={"submit"}>Search</button>
      </form>
      {renderArtists()} */}
    </div>
  )
}

export default Home