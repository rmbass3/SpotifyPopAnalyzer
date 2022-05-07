import React from "react";
import { TailSpin } from "react-loader-spinner"

function Spinner() {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center">
      <TailSpin
        height="100"
        width="100"
        color="#FFFFFF"
        ariaLabel="loading"
      />
    </div>
  )
}

export default Spinner