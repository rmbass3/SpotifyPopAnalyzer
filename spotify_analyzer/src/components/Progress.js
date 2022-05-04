import React, {useEffect} from "react";
import Progressbar from 'react-js-progressbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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

  /*
  if average song popularity less than or equal to 25% rating says "hipster" 
  if greater than 25 but less than or equal to 50 rating says "based"
  if greater than 50 but less than or equal to 75 rating says "centrist"
  if greater than 75 rating says "normie"
  */


  return ((user && token) ?
    <div className="container">
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
          <h1 className="rating text-light mb-5">Rating: Based</h1>
          <div className="accordion w-100" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Popularity Score:
                  <FontAwesomeIcon icon={faAngleDown} className="position-absolute top-50 translate-middle"/>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                <div className="accordion-body">
                  <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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