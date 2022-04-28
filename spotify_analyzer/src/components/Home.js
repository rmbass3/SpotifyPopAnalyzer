import React, {useState} from "react";
import Navbar from "./Navbar";
import User from "./User";
// import axios from "axios"
function Home(props) {

  const [token, setToken] = useState("")
  const [user, setUser] = useState([])

  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken} user={user}/>
      <h1 className="home-title text-center mt-5 text-light">Spotify Analyzer</h1>
      <User token={token} user={user} setUser={setUser}/>
    </div>
  )
}

export default Home