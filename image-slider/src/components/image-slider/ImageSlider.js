import React from "react"
import "./ImageSlider.css"
import { image01 } from "./import"

function ImageSlider() {
  return (
    <div className="slides-container">
      <div className="slide">
        <img src={image01} alt="test" />
        <div class="text">Caption Text</div>
      </div>

      <a className="prev">&#10094;</a>
      <a className="next">&#10095;</a>
    </div>
  )
}

export default ImageSlider
