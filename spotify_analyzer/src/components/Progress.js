import React, {useEffect} from "react";
import Progressbar from 'react-js-progressbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Plot from 'react-plotly.js'

function Progress({percent, setPercent, user, token, favoriteT, mostPop, setMostPop, leastPop, setLeastPop, plotData, setPlotData}) {



  useEffect(() => {

    const calculatePopularity = () => {
      let total = 0
      favoriteT.items.map(track => (
        total += track.popularity
      ))
      return Math.floor((total / favoriteT.items.length))
    }

    const calculateMostPop = () => {
      let popArr = []
      favoriteT.items.forEach(track => {
        if (popArr.length === 0){
          popArr.push(track)
        } else if (track.popularity > popArr[0]?.popularity){
          popArr = []
          popArr.push(track)
        } else if (track.popularity === popArr[0]?.popularity){
          popArr.push(track)
        }
      })
      return popArr
    }

    const calculateLeastPop = () => {
      let popArr = []
      favoriteT.items.forEach(track => {
        if (popArr.length === 0){
          popArr.push(track)
        } else if (track.popularity < popArr[0]?.popularity){
          popArr = []
          popArr.push(track)
        } else if (track.popularity === popArr[0]?.popularity){
          popArr.push(track)
        }
      })
      return popArr
    }

    const calculateTrace = () => {
      // x = index
      // y = pop
      let x = []
      let y = []
      let text = []
      favoriteT.items.forEach((track, index) => {
        x.push(index + 1)
        y.push(track.popularity)
        text.push(track.name)
      })
      let trace = {
        x: x,
        y: y,
        text: text,
        mode: 'lines',
        type: 'scatter'
      }
      console.log(trace)
      return trace
    }

    if (user && token && favoriteT.items){
      setPercent(calculatePopularity())
      setMostPop(calculateMostPop())
      setLeastPop(calculateLeastPop())
      setPlotData(calculateTrace())
    }
  }, [user, token, favoriteT, setPercent, setMostPop, setLeastPop, setPlotData])

  const displayMostPop = () => {
    if (mostPop){
      return mostPop.map(track => (
        <li className="bg-dark text-white list-group-item" key={track.id}>
          <img src={track.album.images[2].url} className="me-3" alt="most-pop-img"/>
          <b>{track.name}</b> - {track.popularity}%
        </li>
      ))
    }
  }

  const displayLeastPop = () => {
    if (leastPop){
      return leastPop.map(track => (
        <li className="bg-dark text-white list-group-item" key={track.id}>
          <img src={track.album.images[2].url} className="me-3" alt="least-pop-img"/>
          <b>{track.name}</b> - {track.popularity}%
        </li>
      ))
    }
  }

  const displayRating = () => {
    if (percent) {
      if (percent === -1){
        return "Calculating..."
      } else if (percent <= 25){
        return "Rating: Hipster"
      } else if (percent <= 50){
        return "Rating: Based"
      } else if (percent <= 75){
        return "Rating: Normie"
      } else {
        return "Rating: Pop Enjoyer"
      }
    }
  }

  const displayRatingComment = () => {
    if (percent) {
      if (percent === -1){
        return ""
      } else if (percent <= 25){
        return "No one listens to your favorite music"
      } else if (percent <= 50){
        return "Not too obscure, but just right"
      } else if (percent <= 75){
        return "Just accept it, you listen to pop music"
      } else {
        return "Ok we get it, you like pop music"
      }
    }
  }

  return ((user && token && percent && favoriteT) ?
    <div className="container progress-container">
      <div className="row mt-5">
        <div className="progress-circle col d-flex justify-content-center">
          <Progressbar
            input={percent}
            shape={'semi circle'}
            clockwise={false}
            textStyle={{ fill: 'white' }}
            pathColor={['#ff91e2', '#7ae0f5']}
            animation={{ 
              duration: 1000,
              delay: 100,
              ease: 'easeOutBack',
              animateOnMount: true,
              animateOnInputChange: true
            }}
          />
        </div>
        <div className="progress-comment col-7 d-flex flex-column justify-content-center align-items-center mb-5">
          <h1 className="rating text-light mb-2">{displayRating()}</h1>
          <h4 className="rating-comment text-light mb-3 fst-italic">{displayRatingComment()}</h4>
          <div className="accordion w-100" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button position-relative collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Popularity Score: {percent === -1 ? 0 : percent}%
                  <FontAwesomeIcon icon={faAngleDown} className="position-absolute top-50 translate-middle"/>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  The popularity score is a value between 0 and 100, with 0 being least the popular, and 100 being the most popular. Spotify calculates this number based on the total number of plays a song has had recently. Average Popularity Score is based on your all time top 50 songs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button position-relative collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Your Most Popular Song(s)
                  <FontAwesomeIcon icon={faAngleDown} className="position-absolute top-50 translate-middle"/>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="list-group">
                    {displayMostPop()}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button position-relative collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Your Least Popular Song(s)
                  <FontAwesomeIcon icon={faAngleDown} className="position-absolute top-50 translate-middle"/>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="list-group">
                    {displayLeastPop()}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button position-relative collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Stats
                  <FontAwesomeIcon icon={faAngleDown} className="position-absolute top-50 translate-middle"/>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex justify-content-center">
                  <Plot
                    data={[
                      {
                        x: plotData.x,
                        y: plotData.y,
                        mode: 'lines',
                        type: 'scatter'
                      },
                      {
                        x: plotData.x,
                        y: plotData.y,
                        mode: 'markers',
                        type: 'scatter',
                        marker: {
                          size: 5
                        },
                        hovertemplate: '#%{x}: <b>%{text}</b><br><extra></extra>' +
                                        'Popularity: <b>%{y}</b>',
                        text: plotData.text,
                      }
                    ]}
                    layout={{
                      width: 500, 
                      height: 350, 
                      title: 'Popularity of Top 50 Songs',
                      xaxis: {
                        title: "Top Song Number",
                      },
                      yaxis: {
                        title: "Popularity"
                      },
                      paper_bgcolor: 'rgba(0,0,0,0)',
                      plot_bgcolor: 'rgba(0,0,0,0)',
                      font: {
                        color: '#fff'
                      },
                      colorway: ['#ff91e2', '#7ae0f5'],
                      showlegend: false
                    }}

                    className='data-plot'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <div></div>
  )
}

export default Progress