import React from "react";
import Tilt from 'react-parallax-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
function FavoriteT({token, user, favoriteT}){

  const displayFavoriteT = () => {
    if (favoriteT.items != null){
      return favoriteT.items.map((track, index) => (
        <Tilt key={track.id}>
          <div className="card bg-dark text-white track-card mt-3 mx-1">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0">
                <span className="badge bg-dark index-pill fs-5 shadow">
                  #{index + 1}
                </span>
              </div>
              <div className="position-absolute top-0 end-0">
                <span className="badge bg-dark percent-pill fs-5 shadow">
                  {track.popularity}%
                </span>
              </div>
              <img src={track.album.images[1].url} className="card-img-top" alt="album-img"/>
            </div>
            <h5 className="card-title m-3 text-center">{track.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="card-text list-group-item fst-italic bg-dark text-white">
                <FontAwesomeIcon icon={faRecordVinyl}/>
                <div className="d-inline ms-2">
                  {track.album.name}
                </div>
              </li>
              <li className="card-text list-group-item bg-dark text-white">
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

  return ((token && user) ?
    <div>
      <div className="tracklist d-flex flex-wrap container mt-4 pb-4 justify-content-center">
        {displayFavoriteT()}
      </div>
    </div>
    :
    <div></div>
  )
}

export default FavoriteT