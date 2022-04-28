import React, {useState, useEffect} from "react";
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
  


  return(
    <div>

    </div>
  )
}

export default FavoriteT