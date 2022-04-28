import React, {useState} from "react";
import Navbar from "./Navbar";

function Home(props) {

  const [token, setToken] = useState("")
  // const [searchKey, setSearchKey] = useState("")
  // const [artists, setArtists] = useState([])

  // const searchArtists = async (e) => {
  //   e.preventDefault()
  //   const {data} = await axios.get("https://api.spotify.com/v1/search", {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       },
  //       params: {
  //           q: searchKey,
  //           type: "artist"
  //       }
  //   })

  //   setArtists(data.artists.items)
  // }

  // const renderArtists = () => {
  //   return artists.map(artist => (
  //       <div key={artist.id}>
  //           {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
  //           {artist.name}
  //       </div>
  //   ))
  // }


  return (
    <div className="home" id="home">
      <Navbar token={token} setToken={setToken}/>
      <h1 className="home-title text-center mt-5">Spotify Analyzer</h1>
      
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