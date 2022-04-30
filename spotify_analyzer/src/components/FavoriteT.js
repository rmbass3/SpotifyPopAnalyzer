import React, {useEffect} from "react";
import axios from "axios";
import Tilt from 'react-parallax-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
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
        <Tilt key={track.id}>
          <div className="card track-card mt-3">
            <img src={track.album.images[1].url} className="card-img-top" alt="album-img"/>
            <h5 className="card-title m-3 text-center">{track.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="card-text list-group-item fst-italic">
                <FontAwesomeIcon icon={faRecordVinyl}/>
                <div className="d-inline ms-2">
                  {track.album.name}
                </div>
              </li>
              <li className="card-text list-group-item">
                <FontAwesomeIcon icon={faUser}/>
                <div className="d-inline ms-2">
                  {track.artists[0].name}
                </div>
              </li>
            </ul>
          </div>
        </Tilt>
      ))
    }
  }

  return(
    <div>
      <div className="tracklist d-flex flex-wrap container mt-4 justify-content-center">
        {displayFavoriteT()}
      </div>
    </div>
  )
}

export default FavoriteT