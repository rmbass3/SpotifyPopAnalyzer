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
      <div className="progress-circle mx-auto mt-5">
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
      <div className="progress-comment"></div>
    </div>
    :
    <div></div>
  )
}

export default Progress