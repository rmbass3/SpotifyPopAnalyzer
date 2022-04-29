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
            limit: 5,
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
  
  // useEffect(() => {
  //   const displayFavoriteT = () => {

  //   }
  //   if (favoriteT != null){
  //     displayFavoriteT()
  //   }
    
  // }, [favoriteT])
  const displayFavoriteT = () => {
    if (favoriteT.items != null){
      return favoriteT.items.map(track => (
        <div key={track.id} className="track-container d-inline-flex justify-content-center align-items-center">
          <h4 className="track-name text-light">{track.name}</h4>
        </div>
      ))
    }
  }

  return(
    <div>
      <div className="tracklist d-flex flex-wrap container fluid mt-5">
        {displayFavoriteT()}
      </div>
    </div>
  )
}

export default FavoriteT