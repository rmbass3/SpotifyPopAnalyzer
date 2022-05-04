import React, {useEffect} from "react";
import Progressbar from 'react-js-progressbar'

function Progress({percent, setPercent, user, token, favoriteT}) {

  useEffect(() => {
    const calculatePopularity = () => {
      let total = 0
      favoriteT.items.map(track => (
        total += track.popularity
      ))
      return Math.floor((total / favoriteT.items.length))
    }
    if (user && token && favoriteT.items){
      setPercent(calculatePopularity())
    }
  }, [user, token, favoriteT, setPercent])



  return ((user && token) ?
    <div className="container">
      <div className="row mt-5">
        <div className="progress-circle col d-flex justify-content-center">
          <Progressbar
            input={percent}
            shape={'semi circle'}
            clockwise={false}
            textStyle={{ fill: 'white' }}
            pathColor={['#31c3e7', '#6210db']}
            animation={{ 
              duration: 1000,
              delay: 100,
              ease: 'easeOutBack',
              animateOnMount: true,
              animateOnInputChange: true
            }}
          />
        </div>
        <div className="progress-comment col-7 d-flex justify-content-center align-items-center mb-5">
          <ul className="list-group w-100 mx-5">
            <li className="list-group-item text-light bg-dark"><h5>Average Song Popularity: <b>-</b></h5></li>
            <li className="list-group-item text-light bg-dark"><h5>Most Popular Song: <b>-</b></h5></li>
            <li className="list-group-item text-light bg-dark"><h5>Least Popular Song: <b>-</b></h5></li>
            <li className="list-group-item text-light bg-dark"><h5>Rating: <b>-</b></h5></li>
          </ul>
        </div>
      </div>
    </div>
    :
    <div></div>
  )
}

export default Progress