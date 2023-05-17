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

      <a className="prev"></a>
      <a className="next"></a>
    </div>
  )
}

export default ImageSlider
