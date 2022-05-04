import React from "react";
import Progressbar from 'react-js-progressbar'

function Progress({percent}) {


  return (
    <div className="progressbar mx-auto mt-5">
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
  )
}

export default Progress