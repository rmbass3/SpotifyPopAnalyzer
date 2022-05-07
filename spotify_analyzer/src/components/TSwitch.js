import React from "react";
import $ from 'jquery'

function TSwitch({setTerm, token, user}) {

  const getRadio = () => {
    if ($('input[id=btnradio1]:checked').val() === 'on'){
      setTerm("short_term")
    } else if ($('input[id=btnradio2]:checked').val() === 'on') {
      setTerm("medium_term")
    } else if ($('input[id=btnradio3]:checked').val() === 'on') {
      setTerm("long_term")
    }
  }


  return ((token && user) ?
    <div className="tswitch">
      <div className=" d-flex justify-content-center">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={getRadio}/>
          <label className="btn btn-outline-secondary" for="btnradio1">Short-Term</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={getRadio} defaultChecked/>
          <label className="btn btn-outline-secondary" for="btnradio2">Medium-Term</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={getRadio}/>
          <label className="btn btn-outline-secondary" for="btnradio3">Long-Term</label>
        </div>
      </div>
    </div>
    :
    <div></div>
  )
}

export default TSwitch