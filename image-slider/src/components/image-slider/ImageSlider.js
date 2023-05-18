import React from "react"
import "./ImageSlider.css"
import { image01, image02, image03, image04 } from "./import"

function ImageSlider() {
  return (
    <div className="slides-container">
      <div className="slide">
        <img src={image01} alt="test" />
        <div class="text">Caption Text</div>
      </div>
      <div className="slide">
        <img src={image02} alt="test" />
        <div class="text">Caption Text</div>
      </div>
      <div className="slide">
        <img src={image03} alt="test" />
        <div class="text">Caption Text</div>
      </div>
      <div className="slide">
        <img src={image04} alt="test" />
        <div class="text">Caption Text</div>
      </div>

      <a className="prev">&#10094;</a>
      <a className="next">&#10095;</a>
      <div className="slides-container__dot-section">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default ImageSlider
