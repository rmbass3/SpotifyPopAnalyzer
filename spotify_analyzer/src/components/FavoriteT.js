import React, {useEffect} from "react";
import axios from "axios";

function FavoriteT({token, favoriteT, setFavoriteT}){

  useEffect(() => {
    const getFavoriteT = async (e) => {
      // e.preventDefault()
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
  
  const displayFavoriteT = () => {
    if (favoriteT.items != null){
      return favoriteT.items.map(track => (
        // <div key={track.id} className="track-container d-inline-flex justify-content-center align-items-center">
        //   <h4 className="track-name text-light">{track.name}</h4>
        // </div>
        <div key={track.id} className="card track-card">
          <img src={track.album.images[1].url} className="card-img-top" alt="album-img"/>
          <div className="card-body">
            <h5 className="card-title">{track.name}</h5>
            <p className="card-text">{track.album.name}</p>
            <p className="card-text">{track.artists[0].name}</p>
          </div>
        </div>
      ))
    }
  }

  return(
    <div>
      <div className="tracklist d-flex flex-wrap container mt-5 justify-content-center">
        {displayFavoriteT()}
      </div>
    </div>
  )
}

export default FavoriteT